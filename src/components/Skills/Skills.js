import React, { Component } from 'react'
import VizSensor from 'react-visibility-sensor';
import './style.scss'

export default class Skills extends Component {
    state = {
        colViz: false
    }
    

    render() {
        return (
            <div id='skills' className='component'>
                <h2>Skills </h2>
                <div className='MySkills'>
                    <div className='column'>
                        <h3>Great Knowledge</h3>
                        <ul className={this.state.colViz ? 'show' : ''}>
                            <VizSensor
                                partialVisibility
                                onChange={(isVisible) => {
                                    this.setState({colViz: isVisible})
                                    console.log(isVisible)
                                }}
                            ></VizSensor>
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
                        </ul>
                    </div>
                    <div className='column'>
                        <h3>Good knowledge</h3>
                        <ul>
                            <li>VueJS</li>
                            <li>NodeJS
                                <ul>
                                    <li>Express</li>
                                </ul>
                            </li>
                            <li>Python</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className='column'>
                        <h3>Basics</h3>
                        <ul>
                            <li>ReactJS</li>
                            <li>Django</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
