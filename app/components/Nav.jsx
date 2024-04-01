import { NavLink } from "@remix-run/react";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/">PORTFOLIO</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </nav>
  );
}
