import React, { Component } from 'react'
import { motion } from 'framer-motion'
import './style.scss'
import { Link } from 'react-scroll'

export default class MainPage extends Component {
    render() {
        return (
            <div id='mainPage'>
                <motion.h1 initial={{x: 400, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 2}}>Szymon Jaskuła</motion.h1>
                <motion.h2 initial={{x: -400, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 2}}>Full-stack Developer</motion.h2>
                <div className='tabs'>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                        <Link 
                        className='btn' 
                        to='skills' 
                        smooth={true} 
                        offset={-50}
                        
                    >Check my skills</Link></motion.div>
                     <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, delay: 1}}
                    ><Link className='btn' to='portfolio' smooth={true} offset={-50}>See my projects</Link></motion.div>
                     <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, delay: 1.5}}
                    ><Link className='btn' to='cv' smooth={true} offset={-50}>Cirriculum Vitae</Link></motion.div>
                     <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, delay: 2}}
                    ><Link className='btn' to='about' smooth={true} offset={-50}>My socials</Link></motion.div>
                </div>
            </div>
        )
    }
}
