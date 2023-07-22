"use client";
const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Transfers",
    route: "/transfers",
  },
  {
    label: "Excursion",
    route: "/excursions",
  },
  {
    label: "About us",
    route: "/about",
  },
];

import Link from "next/link";
import { Navbar, Nav } from "@/components/Boostrap";

export default function Header() {
  return (
    <Navbar  collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" >
          {links.map(({ label, route }) => (
            <Link key={route} href={route}>
              {label}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
