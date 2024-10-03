import { Link, NavLink } from "react-router-dom";
import cn from "../lib/cn";
import { Codesandbox } from "lucide-react";

const Header = () => {
  return (
    <header className=" border-b h-14 flex items-center justify-between px-4">
      <Link to="/" className="flex items-center gap-1">
        <Codesandbox /> Logo
      </Link>
      <nav className="flex items-center gap-4">
        {links.map(({ href, label, id }) => (
          <NavLink
            to={href}
            key={id}
            className={({ isActive }) =>
              cn("transition-colors hover:text-blue-600", {
                "text-blue-600 font-semibold pointer-events-none border-b-2 border-blue-600":
                  isActive,
              })
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;

const links = [
  { id: "home", label: "Strona główna", href: "/" },
  { id: "gallery", label: "Galeria", href: "/gallery" },
  { id: "contact", label: "Kontakt", href: "/contact" },
] as const;
