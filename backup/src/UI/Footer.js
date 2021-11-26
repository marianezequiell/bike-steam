import React from 'react'
import { Link } from 'react-router-dom'
import Ig from '../Img/socialMedia/instagram.png'
import Fb from '../Img/socialMedia/facebook.png'
import Ld from '../Img/socialMedia/linkedin.png'
import Yt from '../Img/socialMedia/youtube.png'

const Footer = () => {
    return (
        <footer>
            <div id="footer-container">
                <div className="section-of-footer">
                    <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">About us</Link></li>
                        <li><Link to="">Team</Link></li>
                        <li><Link to="">Contact</Link></li>
                    </ul>
                </div>
                <div className="section-of-footer">
                    <ul>
                        <li><Link to="">Legal</Link></li>
                        <li><Link to="">FAQ</Link></li>
                    </ul>
                </div>
                <div className="section-of-footer">
                    <div id="box-socialMedia">
                        <ul>
                            <li>
                                <a href="https://www.instagram.com">
                                    <img src={Ig} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com">
                                    <img src={Fb} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com">
                                    <img src={Ld} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com">
                                    <img src={Yt} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>            
        </footer>
    )
}

export default Footer