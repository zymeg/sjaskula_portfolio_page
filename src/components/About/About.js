import React, { Component } from 'react'
import Icons from './Icons.js'
import { faLinkedin, faFacebookSquare, faInstagram, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import './style.scss'

export default class About extends Component {
    state = {
        icons: [
            {
                id: 1,
                link: 'https://www.linkedin.com/in/szymon-jaskuła-55512019a/',
                icon: faLinkedin,
                className: 'lk'
            },
            {
                id: 2,
                link: 'https://www.github.com/zymeg/',
                icon: faGithubSquare,
                className: 'git'
            },
            {
                id: 3,
                link: 'https://www.facebook.com/profile.php?id=100004651323748',
                icon: faFacebookSquare,
                className: 'fb'
            },
            {
                id: 4,
                link: 'https://www.instagram.com/zymeg/',
                icon: faInstagram,
                className: 'ig'
            },
        ]
    }

    render() {
        return (
            <div className='component' name='about' id='about'>
                <h2>My social</h2>
                <div className='socials'>
                    {this.state.icons.map(e => {
                        return (
                            <Icons inner={e} key={e.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
