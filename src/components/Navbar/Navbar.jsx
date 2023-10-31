import { Menu } from "@/components/Navbar/Menu";

export function Navbar() {
  return (
    <nav className="navbar">
      <Menu />
      <h1 className="navbar__title">ЗАЯВКИ</h1>
    </nav>
  );
}
