import styleHeader from "./Header.module.css";

import { Link, useNavigate } from "react-router-dom";
import codebyLogo from "../../assets/logo_codeby.png";
import { List, X } from "phosphor-react";
import { useState } from "react";

export function Header() {
  const [menuClick, setMenuClick] = useState<Boolean>(false);

  function handleMenuClick() {
    if (menuClick === true) {
      setMenuClick(false);
      console.log("função de clickar no menu", menuClick);
    } else if (menuClick === false) {
      setMenuClick(true);
      console.log("função de clickar no menu", menuClick);
    }
  }

  const history = useNavigate();
  function redirectHome() {
    console.log("Redirecting");
    history("/");
  }

  return (
    <div className={styleHeader.container}>
      <img
        onClick={redirectHome}
        src={codebyLogo}
        alt="Logo da empresa CodeBy"
      />
      <div className={styleHeader.linkContainer}>
        <Link className={styleHeader.link} to="/cart/abaixo-10">
          Carrinho Abaixo 10
        </Link>
        <Link className={styleHeader.link} to="/cart/acima-10">
          Carrinho Acima 10
        </Link>
      </div>

      {/* Menu resposivo */}
      <nav className={styleHeader.navBar}>
        <List
          size={32}
          onClick={handleMenuClick}
          className={menuClick === true ? styleHeader.listIconFalse : undefined}
        />
        <div className={menuClick === true ? styleHeader.navLinksTrue : styleHeader.navLinksFalse}>
          <X size={32} onClick={handleMenuClick} className={menuClick === false ? styleHeader.XIconTrue : undefined}/>

          <Link className={styleHeader.linkNav} onClick={handleMenuClick} to="/cart/abaixo-10">
            Carrinho Abaixo 10
          </Link>
          <Link className={styleHeader.linkNav} onClick={handleMenuClick} to="/cart/acima-10">
            Carrinho Acima 10
          </Link>
        </div>
      </nav>
    </div>
  );
}
