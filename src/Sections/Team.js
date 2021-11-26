import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import Audio1 from '../audio/Audio1.mp3'
import Audio2 from '../audio/Audio2.mp3'
import Audio3 from '../audio/Audio3.mp3'
import Audio4 from '../audio/Audio4.mp3'
import Header from '../UI/Header'
import SectionTitle from '../UI/SectionTitle'

const Team = () => {
    return (
        <div>
            <Header />
            <SectionTitle title="Team" />
            <div id="team-container">
                <div id="audio-container">
                    <LoremIpsum p="1" />
                    <div id="audio-box">
                        <audio src={Audio1} controls />
                        <audio src={Audio2} controls />
                        <audio src={Audio3} controls />
                        <audio src={Audio4} controls />
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Team
