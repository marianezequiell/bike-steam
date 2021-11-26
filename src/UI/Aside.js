/* eslint-disable jsx-a11y/iframe-has-title */
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Img/logo-white.png'

const Aside = () => {
    const [focusValue, setFocusValue] = useState({part1: "", part2: "", part3: "", part4: "", part5: ""})

    const listMenu = [
        [{id: 1, section: "Home", route: "/"}, {part1: <h1>Home</h1>, part2:<Link to="/" ><img id="logo-img" alt="Logo" src={Logo}/></Link>, class: ""}],
        [{id: 2, section: "Nosotros", route: "/about-us"}, {part1: <h1>Nosotros</h1>, part2: "", class: ""}],
        [{id: 3, section: "Equipo", route: "/team"}, {part1: <h1>Equipo</h1>, part2: "", class: ""}],
        [{id: 4, section: "Contacto", route: "/contact"}, {part1: <h1>Contacto</h1>, part2: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26281.729249301396!2d-58.43852504695255!3d-34.573396763125984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c771eb933%3A0x6b3113b596d78c69!2sPalermo%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1637693448833!5m2!1ses-419!2sar"  style={{border: 0, width: 200, height: 175}} allowfullscreen="" loading="lazy" />, class: ""}],
    ]

    const focus = (value) => (event) => {
        setFocusValue(value);
    }

    return (
        <aside id="Aside">
            <div id="aside-box">
                <div id="box-title-aside">
                    <>{focusValue.part1}</>
                    <>{focusValue.part2}</>
                    <>{focusValue.part3}</>
                    <>{focusValue.part4}</>
                    <>{focusValue.part5}</>
                </div>
                <div id="box-list-aside">
                    <ul id="aside-list">
                        {
                            listMenu.map(data => {
                                return (
                                    <li><Link to={data[0].route} onMouseMove={focus(data[1])}>{data[0].section}</Link></li> 
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Aside
