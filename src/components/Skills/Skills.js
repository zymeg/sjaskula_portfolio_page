import React, { Component } from 'react'
import { List } from './List.js'
import Column from './Column.js'
import './style.scss'

export default class Skills extends Component {
    state = {
        List
    }
    
    render() {
        return (
            <div id='skills' className='component'>
                <h2>Skills </h2>
                <div className='MySkills'>
                {this.state.List.map(e => {
                    return (<Column inner={e} key={e.id} />)
                })}
                </div>
            </div>
        )
    }
}
