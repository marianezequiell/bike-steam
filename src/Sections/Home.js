import React from 'react'
import HeaderHome from '../UI/HeaderHome'
import {LoremIpsum} from 'react-lorem-ipsum'
import Slider from '../UI/Slider'
import background from '../Img/background-1.jpg'


const Home = () => {

    return (
        <>
            <img id="backGround" src={background} alt="background" />
            <HeaderHome />
            <div id="sub-backGround">
                <div id="box-text-prn">
                    <Slider />
                    <div id="aaa">
                        <h2>
                            <LoremIpsum avgWordsPerSentence="0" />
                        </h2>
                        <LoremIpsum p="2" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
