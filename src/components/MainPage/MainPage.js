import React, { Component } from 'react'
import { motion } from 'framer-motion'
import './style.scss'
import Tab from './Tab.js'

export default class MainPage extends Component {
    state = {
        tabs: [
            {
                id: 1,
                to: 'skills',
                text: 'Check my skills'
            },
            {
                id: 2,
                to: 'portfolio',
                text: 'See my projects'
            },
            {
                id: 3,
                to: 'cv',
                text: 'Curriculum vitae'
            },
            {
                id: 4,
                to: 'about',
                text: 'My socials'
            },
        ]
    }

    render() {
        return (
            <div id='mainPage'>
                <motion.h1 
                    initial={{x: 400, opacity: 0}} 
                    animate={{x: 0, opacity: 1}} 
                    transition={{duration: 2}}
                >Szymon Jaskuła</motion.h1>

                <motion.h2 
                    initial={{x: -400, opacity: 0}} 
                    animate={{x: 0, opacity: 1}} 
                    transition={{duration: 2}}
                >Full-stack Developer</motion.h2>
                
                <div className='tabs'>
                    {this.state.tabs.map(e => {
                        return (<Tab inner={e} key={e.id} />)
                    })}
                </div>
            </div>
        )
    }
}
