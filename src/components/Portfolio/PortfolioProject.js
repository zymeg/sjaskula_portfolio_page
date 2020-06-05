import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default class PortfolioProject extends Component {
    state = {
        firstVisible: false
    }

    showProject = inView => {
        if(inView === true) this.setState({ firstVisible: true });
    }

    render() {
        return (
            
            <InView 
                as="div" 
                className='portfolioProject' 
                onChange={(inView) => this.showProject(inView)}
            >
                <motion.h3 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={this.state.firstVisible ? { x: 0, opacity: 1 } : false } 
                    transition={{  duration: 1.5 }}
                >{ this.props.info.title }</motion.h3>

            <motion.p  
                initial={{ x: -100, opacity: 0 }} 
                animate={this.state.firstVisible ? { x: 0, opacity: 1 } : false } 
                transition={{  duration: 1.5 }}
                className='description'
            >{this.props.info.description}</motion.p>
                    <div className='screenshots'>
                        {this.props.info.imgs.map((res, i) => {
                            return (
                                <motion.img 
                                    src={res.link} 
                                    alt={res.alt} key={i} 
                                    onClick={this.openShowcase}  
                                    initial={{ opacity: 0 }} 
                                    animate={this.state.firstVisible ? { opacity: 1 } : false } 
                                    transition={{  duration: 0.7, delay: (i * 0.5) }} 
                                ></motion.img>
                            )
                        })}
                    </div>
                    {this.props.info.link ? (
                        <motion.a 
                            href={this.props.info.link}
                            initial={{ x: 1000, opacity: 0 }} 
                            animate={this.state.firstVisible ? { x: 0, opacity: 1 } : false } 
                            transition={{  duration: 1, delay: 0.5 }} 
                        >App page</motion.a>
                    ) : ('')}
                    {this.props.info.gitRepo ? (
                        <motion.a 
                            href={this.props.info.gitRepo}
                            initial={{ x: -1000, opacity: 0 }} 
                            animate={this.state.firstVisible ? { x: 0, opacity: 1 } : false } 
                            transition={{  duration: 1, delay: 0.5 }} 
                        >Git repository</motion.a>
                    ) : ('')}
            </InView>
        )
    }
}
