import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div id="box-list">
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">About us</Link></li>
                    <li><Link to="">Projects</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
