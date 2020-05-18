import React, { Component } from 'react'
import './style.scss'

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li><a href='#skills'>Skills</a></li>    
                    <li><a href='#portfolio'>Portfolio</a></li>    
                    <li><a href='#cv'>Curriculum Vitae</a></li>        
                </ul>   
            </header>
        )
    }
}
