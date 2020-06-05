import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default class Column extends Component {
    state = {
        firstVisible: false
    }

    showColumn = inView => {
        if(inView === true) this.setState({ firstVisible: true });
    }

    render() {
        return (
            <InView 
                as="div" 
                className='column' 
                onChange={(inView) => this.showColumn(inView)}
            >
                <motion.h3 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={this.state.firstVisible ? { x: 0, opacity: 1 } : false } 
                    transition={{  duration: 1, delay: (this.props.inner.id * 0.5) }}
        >{ this.props.inner.title }</motion.h3>
                <motion.ul
                    initial={{ y: 100, opacity: 0 }}
                    animate={this.state.firstVisible ? { y: 0, opacity: 1 } : false }
                    transition={{ duration: 2, delay: (this.props.inner.id * 0.5) }}
                    className={this.state.colViz ? 'show' : ''}> 

                    {this.props.inner.list.map(e => {
                        return (
                            <li> {e.title}
                            <ul>
                                {e.sublist.map(sube => {
                                    return (
                                        <li>
                                            {sube.title}
                                        </li>
                                    )
                                })}
                            </ul>
                            </li>
                        )
                    })} 
                </motion.ul>
            </InView>
        )
    }
}
