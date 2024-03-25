import { NavLink } from "@remix-run/react";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/">PORTFOLIO</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </nav>
  );
}
