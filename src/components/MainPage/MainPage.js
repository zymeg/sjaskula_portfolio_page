import React, { Component } from 'react'
import './style.scss'
import { Link } from 'react-scroll'

export default class MainPage extends Component {
    render() {
        return (
            <div id='mainPage'>
                <h1>Szymon Jaskuła</h1>
                <h2>Full-stack Developer</h2>
                <div className='tabs'>
                    <Link className='btn' to='skills' smooth={true} offset={-50}>Check my skills</Link>
                    <Link className='btn' to='portfolio' smooth={true} offset={-50}>See my projects</Link>
                    <Link className='btn' to='cv' smooth={true} offset={-50}>Cirriculum Vitae</Link>
                    <Link className='btn' to='about' smooth={true} offset={-50}>My socials</Link>
                </div>
            </div>
        )
    }
}
