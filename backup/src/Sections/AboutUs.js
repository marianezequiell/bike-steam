import React from 'react'
import Header from '../UI/Header'
import SectionTitle from '../UI/SectionTitle'
import {LoremIpsum} from 'react-lorem-ipsum'
import ImgExample from '../Img/slide-1.jpg'
import Video from '../Videos/example.mp4'
import Img1 from '../Img/about-us/1.jpg'
import Img2 from '../Img/about-us/2.jpg'
import Img3 from '../Img/about-us/3.jpg'
import Img4 from '../Img/about-us/4.jpg'

const AboutUs = () => {
    return (
        <div>
            <Header />
            <SectionTitle title="Nosotros" />
            <div id="aboutUs">
                <div id="aboutUs-box">
                    <div className="aboutUs-box-double">
                        <div className="aboutUs-item-container">
                            <div>
                                <img src={ImgExample} alt="a" />
                            </div>
                            <LoremIpsum p="1" />
                        </div>
                        <div className="aboutUs-item-container">
                        <LoremIpsum p="1" />
                            <div>
                                <img src={ImgExample} alt="a" />                            
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="video-container">
                        <div className="video-box">
                            <video src={Video} muted autoPlay loop/>
                        </div>
                    </div>
                    <hr />
                    <div className="aboutUs-box-one">
                        <LoremIpsum p="1" />
                        <div className="multiple-img">
                            <img src={Img1} alt="a" />                        
                            <img src={Img2} alt="a" /> 
                            <img src={Img3} alt="a" /> 
                            <img src={Img4} alt="a" /> 
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default AboutUs