import classnames from "classnames";
import Link from "next/link";
import { FC } from "react";

export interface Props {
  active?: boolean;
  href: string;
  title: string;
}

const NavItem: FC<Props> = ({ active, href, title }) => {
  return (
    <li>
      <Link href={href}>
        <a
          className={classnames("block px-6 py-4 text-zinc-800", {
            "bg-zinc-200 cursor-default": active,
            "hover:bg-zinc-100 hover:text-zinc-800": !active,
          })}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
