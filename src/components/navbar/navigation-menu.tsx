"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationMenuType = {
  path: string;
  name: string;
};

// menu object
const menuObject: NavigationMenuType[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/about/team",
    name: "Team",
  },
  {
    path: "/products",
    name: "Products",
  },
];
export default function NavigationMenu() {
  let pathName = usePathname();
  return (
    <nav className="px-5">
      {menuObject.map((menu) => {
        const isActive =
          menu.path === "/"
            ? pathName === menu.path
            : pathName === menu.path || pathName.startsWith(`${menu.path}`);
        return (
          <Link
            key={menu.path}
            className={
              isActive
                ? "text-red-600 font-bold px-5 text-3xl"
                : "text-black hover:text-red-400 px-5 text-3xl"
            }
            href={menu.path}
          >
            {menu.name}
          </Link>
        );
      })}
    </nav>
  );
}
