import { FC } from "react";

interface Props {
  children?: any;
}

const Nav: FC<Props> = ({ children }) => {
  return <ul className="flex">{children}</ul>;
};

export default Nav;
