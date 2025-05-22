import { Product } from "components";
import { prisma } from "prisma";

const ProductsPage = async () => {
  const products = await prisma.product.findMany();

  return (
    <div className="p-3">
      <h2>Products</h2>

      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
