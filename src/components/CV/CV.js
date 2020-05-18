import React, { Component } from 'react'
import en from './en/cv.pdf'
import pl from './pl/cv.pdf'
import './style.scss'

export default class CV extends Component {
    state = {
        file: en
    }

    render() {
        return (
            <div id='cv' className='component'>
                    <div className='resumes'>
                <h2>Curriculum vitae</h2>
                    { /* eslint-disable-next-line */ }
                        <a href={en} className='btn' target='_blank'>English resume</a>
                    { /* eslint-disable-next-line */ }
                        <a href={pl} className='btn' target='_blank'>Polish resume</a>
                    </div>
            </div>
        )
    }
}
