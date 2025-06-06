import { getOrders_A } from "@/actions";
import { CreateOrderBtn, OrdersContainer } from "@/components";
import { sleep } from "@/utils";

const OrdersPage = async () => {
  const { data, isSuccess, errMessage } = await getOrders_A();

  await sleep(1000); // Artificial delay to simulate loading for demonstrating the loading UI

  if (!isSuccess) {
    return (
      <div className="alert alert-danger" role="alert">
        {errMessage}
      </div>
    );
  }

  return (
    <div className="p-3">
      <div className="container d-flex justify-content-between pb-2">
        <h2>Ordes({data.total})</h2>

        <CreateOrderBtn />
      </div>

      <div>
        <OrdersContainer ordersWithPrice={data.orders} />
      </div>
    </div>
  );
};
export default OrdersPage;
