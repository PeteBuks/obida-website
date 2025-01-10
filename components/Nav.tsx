"use client";

import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-10">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "border-b-[2px] border-primary text-primary"
            } capitalize font-medium hover:text-primary hover:border-b-[2px] hover:border-primary`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
