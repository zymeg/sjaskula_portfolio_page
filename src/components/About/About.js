import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './style.scss'

export default class About extends Component {
    render() {
        return (
            <div className='component' name='about' id='about'>
                <h2>My social</h2>
                <div className='socials'>
                    <a href='https://www.linkedin.com/in/szymon-jaskuła-55512019a/'><FontAwesomeIcon icon={faLinkedin} className='lk'/></a>
                    <a href='https://www.instagram.com/zymeg/'><FontAwesomeIcon icon={faFacebookSquare} className='fb' /></a>
                    <a href='https://www.facebook.com/profile.php?id=100004651323748'><FontAwesomeIcon icon={faInstagram} className='ig' /></a>
                </div>
            </div>
        )
    }
}
