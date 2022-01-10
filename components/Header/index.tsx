import type { NextPage } from "next";
import Nav from "../Nav";
import NavItem from "../Nav/NavItems";
import { useRouter } from "next/router";
import type { Props as NavItemProps } from "../Nav/NavItems";

const links: NavItemProps[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/admin",
    title: "Admin",
  },
  {
    href: "/login",
    title: "Login",
  },
];

const Header: NextPage = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-center mx-4 border-zinc-300 border-b-2">
      <Nav>
        {links.map((l) => (
          <NavItem
            active={router.pathname === l.href}
            href={l.href}
            title={l.title}
            key={l.title}
          />
        ))}
      </Nav>
    </header>
  );
};

export default Header;
