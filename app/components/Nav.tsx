"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./../styles/Nav.scss"

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-list__item"><Link
          className={`${pathname === "/" ? "menu-list__item--before" : ""}`}
          href="/"
        >
          ShowProducts
        </Link></li>
        <li className="menu-list__item"><Link
          className={`${pathname === "/addProduct" ? "menu-list__item--before" : ""}`}
          href="/addProduct"
        >
          Addproduct
        </Link></li>


        <li className="menu-list__item"><Link
          className={`${pathname === "/users" ? "menu-list__item--before" : ""}`}
          href="/users"
        >
          Users
        </Link></li>
      </ul>

    </nav>
  );
};
