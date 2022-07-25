import styleHeader from "./Header.module.css"

import { Link, useNavigate } from "react-router-dom";
import codebyLogo from "../../assets/logo_codeby.png"

export function Header() {
    const history = useNavigate()
    function redirectHome(){
        console.log("Redirecting")
        history("/")
    }

    return (
        <div className={styleHeader.container}>
            <img onClick={redirectHome} src={codebyLogo} alt="Logo da empresa CodeBy"/>
            <Link className={styleHeader.link} to="/cart/abaixo-10">Carrinho Abaixo 10</Link>
            <Link className={styleHeader.link} to="/cart/acima-10">Carrinho Acima 10</Link>
        </div>
    )
}