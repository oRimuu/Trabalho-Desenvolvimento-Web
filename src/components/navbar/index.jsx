import { useState } from "react";
import { User, Search, Menu } from "lucide-react";
import style from "./style.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbarLeft}>
        <a href="http://localhost:5173">HOME</a>
        <a href="https://pt.wikipedia.org/wiki/Interstellar">SOBRE</a>
        <a href="https://github.com/oRimuu">CONTATO</a>
      </div>

      <input type="text" placeholder="Pesquisar" className={`${style.searchInput} ${searchOpen ? style.show : ""}`} />

      <div className={style.navbarRight}>
        {window.innerWidth > 320 && (
          <User
            className={style.icon}
            onClick={() => window.location.href = "/login"}
          />
        )}
        <Search className={style.icon} onClick={toggleSearch} />
        <Menu className={style.icon} onClick={toggleMenu} />
      </div>

      <div
        className={`${style.dropdownMenu} ${menuOpen ? style.open : ""}`}
      >
        <a href="http://localhost:5173/Login">Login</a>
        <a href="https://pt.wikipedia.org/wiki/Interstellar">Sobre</a>
        <a href="https://github.com/oRimuu">Contato</a>
      </div>
    </nav>
  );
};
