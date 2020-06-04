import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import './style.scss'

export default class Skills extends Component {
    state = {
        colViz: false,
        firstVisible: false,
        initialAnimation: false
    }

    showColumn = inView => {
        if(inView === true) this.setState({ firstVisible: true });
    }
    

    render() {
        return (
            <div id='skills' className='component'>
                <h2>Skills </h2>
                <div className='MySkills'>
                    <InView as="div" className='column' onChange={(inView) => this.showColumn(inView)}>
                        <motion.h3 initial={{ x: 100, opacity: 0 }} animate={this.state.firstVisible ? { x: 0, opacity: 1 } : false } transition={{  duration: 1, delay: 0.5 }}>Great Knowledge</motion.h3>
                        <motion.ul
                            initial={{ y: 100, opacity: 0 }}
                            animate={this.state.firstVisible ? { y: 0, opacity: 1 } : false }
                            transition={{ duration: 2, delay: 0.5 }}
                            className={this.state.colViz ? 'show' : ''}> 
                            <li>HTML5</li>
                            <li>CSS3
                                <ul>
                                    <li>SASS preproccesor</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </li>
                            <li>JavaScript
                                <ul>
                                    <li>ES6</li>
                                </ul>
                            </li>
                            <li>PHP7</li>
                            <li>MySQL</li>
                            <li>OracleDB</li>
                        </motion.ul>
                    </InView>
                    <div className='column'>
                    <motion.h3 initial={{ x: 100, opacity: 0 }} animate={this.state.firstVisible ? { x: 0, opacity: 1 } : false } transition={{  duration: 1, delay: 1 }}>Good knowledge</motion.h3>
                        <motion.ul
                            initial={{ y: 100, opacity: 0 }}
                            animate={this.state.firstVisible ? { y: 0, opacity: 1 } : false }
                            transition={{ duration: 2, delay: 1 }}
                            className={this.state.colViz ? 'show' : ''}> 
                            <li>VueJS</li>
                            <li>NodeJS
                                <ul>
                                    <li>Express</li>
                                </ul>
                            </li>
                            <li>Python</li>
                            <li>MongoDB</li>
                        </motion.ul>
                    </div>
                    <div className='column'>
                    <motion.h3 initial={{ x: 100, opacity: 0 }} animate={this.state.firstVisible ? { x: 0, opacity: 1 } : false } transition={{  duration: 1, delay: 1.5 }}>Basics</motion.h3>
                        <motion.ul
                            initial={{ y: 100, opacity: 0 }}
                            animate={this.state.firstVisible ? { y: 0, opacity: 1 } : false }
                            transition={{ duration: 2, delay: 1.5 }}
                            className={this.state.colViz ? 'show' : ''}> 
                            <li>ReactJS</li>
                            <li>Django</li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        )
    }
}
