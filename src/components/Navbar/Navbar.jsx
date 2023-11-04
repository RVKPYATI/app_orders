import Link from "next/link";

import { Menu } from "@/components/Navbar/Menu";

export function Navbar() {
  return (
    <nav className="navbar">
      <Menu />
      <h1 className="navbar__title">
        <Link href="/">ЗАЯВКИ</Link>
      </h1>
    </nav>
  );
}
