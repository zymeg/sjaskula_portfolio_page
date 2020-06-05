import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default class Icons extends Component {
    state = {
        firstVisible: false
    }

    showIcon = inView => {
        if(inView === true) this.setState({ firstVisible: true });
    }

    render() {
        return (
        <InView onChange={(inView) => this.showIcon(inView)}>
            <motion.a 
                href={this.props.inner.link}
                initial={{opacity: 0}} 
                animate={this.state.firstVisible ? { opacity: 1 } : false } 
                transition={{duration: 1, delay: (this.props.inner.id * 0.5)}}
            >
                <FontAwesomeIcon 
                    icon={this.props.inner.icon} 
                    className={this.props.inner.className}
                />
            </motion.a>
        </InView>
        )
    }
}
