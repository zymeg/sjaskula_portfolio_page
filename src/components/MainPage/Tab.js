import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export default class Tab extends Component {
    

    render() {
        return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: (this.props.inner.id * 0.5)}}
                >
                <Link 
                    className='btn' 
                    to={this.props.inner.to}
                    smooth={true} 
                    offset={-50}
                    >
                    {this.props.inner.text}
                </Link>
            </motion.div>
        )
    }
}
