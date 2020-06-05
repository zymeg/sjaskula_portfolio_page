import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default class Btn extends Component {
    state = {
        firstVisible: false
    }

    showBtn = inView => {
        if(inView === true) this.setState({ firstVisible: true });
    }

    render() {
        return (
            <InView onChange={(inView) => this.showBtn(inView)}>
                <motion.a 
                    href={this.props.inner.file} 
                    className='btn'
                    target='_blank'
                    rel="noopener noreferrer" 
                    initial={{opacity: 0}} 
                    animate={this.state.firstVisible ? { opacity: 1 } : false } 
                    transition={{duration: 2, delay: (this.props.inner.id * 0.5)}}
                >{this.props.inner.title}</motion.a>
            </InView>
        )
    }
}
