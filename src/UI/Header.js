import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Img/logo_transparent.png'
import { useContext } from 'react';
import AsideContext from '../Context/Aside-context';

const Header = () => {
    const [icono, setIcono] = useState("abrir-menu-desplegable")
    const {setClassAside} = useContext(AsideContext)

    const desplegar = () => {
        if (icono === "abrir-menu-desplegable") {
            setIcono("cerrar-menu-desplegable")
            setClassAside("menu-desplegado")
        } else {
            setIcono("abrir-menu-desplegable")
            setClassAside("menu-sin-desplegar")
        }
    }

    return (
        <header style={{backgroundColor: "white", borderRadius: 0}}>
            <div id="header-container">
                <div id="menu-desp-container">
                    <div id="menu-desp-box">
                        <Link to="">
                            <div id="menu-desp-icono" className={icono} onClick={desplegar}>
                                <div />
                                <p>Acceso direct</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div id="logo-container">
                    <div id="linkLogo">
                        <Link to="/" >
                            <img id="logo-img" alt="Logo" src={Logo}/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
