import { Menu } from "lucide-react";
import { NavLink } from "react-router"

import type { MenuItem } from "./menu-item";
import { Button } from "../shared/Button.tsx";
import { useState } from "react";

export function Navbar() {
  const menuItems: MenuItem[] = [
    { href: "/", text: "Products" },
    { href: "/top-sellers", text: "Top sellers" },
    { href: "/add-product", text: "Add" },
  ];

  const [isShown, setIsShown] = useState(false); // tutaj potrzebujemy tzw. STANU ! (useState hook)

  return (
    <nav className="grow gap-2 text-base flex justify-between">
      <div className="relative hidden md:flex top-3 md:top-6">
        {menuItems.map(({ href, text }) => (
          <NavLink
            key={href}
            to={href}
            className={({isActive}) => `px-3 py-1 rounded-t-xl hover:dark:bg-slate-700 hover:bg-slate-200 cursor-pointer active:font-bold ${isActive ? "font-bold dark:bg-slate-800 bg-slate-300" : ""}`}
          >
            {text}
          </NavLink>
        ))}
      </div>
      <div className="relative block md:hidden">
        {/* <Button onPress={() => setIsShown(!isShown)}> */}
        <Button onPress={() => setIsShown((v) => !v)}>
          <Menu /> 
        </Button>
        {/* Co renderuje się w JSX ? */}
        {0}{null}{undefined}{true}{false}{NaN}
        {/* nasz dropdown: */}
        {isShown && (
          <div className="absolute left-0 top-full mt-2 flex flex-col gap-1 p-2 rounded border border-slate-400 bg-white dark:bg-slate-950 dark:border-slate-600 z-10">
            {menuItems.map(({ href, text }) => (
              <NavLink
                key={href}
                to={href}
                onClick={() => setIsShown(false)}
                className={({ isActive }) => `px-3 py-1 text-left rounded whitespace-nowrap hover:dark:bg-slate-700 hover:bg-slate-200 cursor-pointer ${isActive ? 'dark:bg-slate-800 bg-slate-300' : ''}`}
              >
                {text}
              </NavLink>
            ))}
          </div>
        )}
      </div>
      {/* zad. 13 kod... */}

      {/* <Button onPress={() => { 
        console.log("HELLo")
        count++;
        console.log(count);
        }}>{count}</Button> */}
      {/* <Button>{9276}</Button>

      <Button>
        <span style={{ color: "red" }}> hell</span>oo!
      </Button> */}
    </nav>
  );
}
