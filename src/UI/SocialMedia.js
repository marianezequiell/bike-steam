import React from 'react'
import Ig from '../Img/socialMedia/instagram.png'
import Fb from '../Img/socialMedia/facebook.png'
import Ld from '../Img/socialMedia/linkedin.png'
import Yt from '../Img/socialMedia/youtube.png'
// import Audio1 from '../audio/Audio1.mp3'

const SocialMedia = () => {
    return (
        <div id="socialMedia">
            {/* <audio src={Audio1} controls loop /> */}
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
    )
}

export default SocialMedia
