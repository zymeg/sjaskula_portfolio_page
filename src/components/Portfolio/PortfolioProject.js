import React, { Component } from 'react'
import VizSensor from 'react-visibility-sensor';

export default class PortfolioProject extends Component {
    state = {
        projectViz: false
    }

    render() {
        return (
            
            <div className={`portfolioProject ${this.state.projectViz ? 'show' : ''}`}>
                <VizSensor
                    onChange={(isVisible) => {
                        this.setState({projectViz: isVisible})
                        
                    }}
                ></VizSensor>
                <h3>{this.props.info.title}</h3>

            <p className='description'>{this.props.info.description}</p>
                    <div className='screenshots'>
                        {this.props.info.imgs.map((res, i) => {
                            return (<img src={res.link} alt={res.alt} key={i} onClick={this.openShowcase} ></img>)
                        })}
                    </div>
                    {this.props.info.link ? (<a href={this.props.info.link}>App page</a>) : ('')}
                    {this.props.info.gitRepo ? (<a href={this.props.info.gitRepo}>Git repository</a>) : ('')}
            </div>
        )
    }
}
