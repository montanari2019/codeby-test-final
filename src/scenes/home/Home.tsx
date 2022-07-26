import styleHome from "./Home.module.css";

import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { ShoppingCartSimple } from "phosphor-react";

export function Home() {
  return (
    <div>
      <Header />
      <div className={styleHome.container}>
        <section className={styleHome.listItemHome}>
          <strong>Não possuímos nenhum item no momento</strong>
          <ShoppingCartSimple size={32} />
        </section>
      </div>
    </div>
  );
}
