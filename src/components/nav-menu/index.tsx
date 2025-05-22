"use client";

import Image from "next/image";
import Link from "next/link";
import "./style.css";
import avatar from "../../../public/user-ava.svg";
import gear from "../../../public/gear-green.svg";
import { usePathname } from "next/navigation";

const LINKS = [
  { title: "Home", href: "/" },
  { title: "Orders", href: "/orders" },
  { title: "Products", href: "/products" },
] as const;

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="d-flex flex-column nav">
      <div className="nav__avatar d-flex justify-content-center align-items-center py-5">
        <div className="position-relative">
          <Image width={80} height={80} alt="avatar" src={avatar} />

          <span className="nav__avatar-indicator position-absolute bottom-0 end-0 rounded-circle d-flex justify-content-center align-items-center">
            <Image width={16} height={16} alt="avatar" src={gear} />
          </span>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        {LINKS.map(({ href, title }) => (
          <Link
            key={title}
            href={href}
            className={`nav__link ${pathname === href && "nav__link_active"}`}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;
