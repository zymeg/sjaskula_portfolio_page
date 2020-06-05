import React, { Component } from 'react'
import Btn from './Btn.js'
import en from './en/cv.pdf'
import pl from './pl/cv.pdf'
import './style.scss'

export default class CV extends Component {
    state = {
        btns: [
            {
                id: 1,
                title: 'English resume',
                file: en
            },
            {
                id: 2,
                title: 'Polish resume',
                file: pl
            },
        ]
    }

    render() {
        return (
            <div id='cv' className='component'>
                <h2>Curriculum vitae</h2>
                    <div className='resumes'>
                        {this.state.btns.map(e => {
                        return (
                            <Btn inner={e} key={e.id}/>
                        )})}
                    </div>
            </div>
        )
    }
}
