import type { MenuItem } from "./menu-item";
import { Button } from "../shared/Button.tsx";

export function Navbar() {
  const menuItems: MenuItem[] = [
    { href: "/", text: "Products" },
    { href: "/top-sellers", text: "Top sellers" },
    { href: "/blog", text: "Blog" },
  ];

  return (
    <nav className="grow gap-2 text-base flex justify-between">
      <div className="relative md:flex top-3 md:top-6">
        {menuItems.map(({ href, text }) => (
          <a
            key={href}
            href={href}
            className="px-3 py-1 rounded-t-xl hover:dark:bg-slate-700 hover:bg-slate-200 cursor-pointer active:font-bold"
          >
            {text}
          </a>
        ))}
      </div>
      <Button />
      {/* <Button>{9276}</Button>

      <Button>
        <span style={{ color: "red" }}> hell</span>oo!
      </Button> */}
    </nav>
  );
}
