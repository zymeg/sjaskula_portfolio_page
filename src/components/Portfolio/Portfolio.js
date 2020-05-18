import React, { Component } from 'react'
import PortfolioProject from './PortfolioProject.js'
import './style.scss'


export default class Portfolio extends Component {
    state = {
        projects: [
            {
                title: "(Vue.js) Weather App",
                description: "Simple weather app built with Vue.js. OpenWeather Api provides information for this site.",
                imgs: [
                    {
                        link: "./img/weatherApp/weather-1.png",
                        alt: "Home page of Vue weather app"
                    },
                    {
                        link: "./img/weatherApp/weather-3.png",
                        alt: "Forecast on Vue weather app"
                    },
                    {
                        link: "./img/weatherApp/weather-2.png",
                        alt: "Current weather info displayed on Vue weather app"
                    }

                ],
                gitRepo: 'https://github.com/zymeg/Vue-Weather-App',
                link: '/projects/weatherApp'
            },
            {
                title: "(ES6, CSS3) Simple projects",
                description: "3 projects that I've made in school as my homework. You can find more info in Git repository linked below...",
                imgs: [
                    {
                        link: "./img/pure-JS-CSS/1.png",
                        alt: "First page of color picker"
                    },
                    {
                        link: "./img/pure-JS-CSS/2.png",
                        alt: "Second page of color picker"
                    },
                    {
                        link: "./img/pure-JS-CSS/3.png",
                        alt: "Lotto simulator"
                    },
                    {
                        link: "./img/pure-JS-CSS/4.png",
                        alt: "One-arm bandit simulator"
                    }

                ],
                gitRepo: 'https://github.com/zymeg/PureJS-CSS',
                link: '/projects/js_css/'
            },
            {
                title: "Discord bot",
                description: "Discord app bot for managing Mafia game with simple commands",
                imgs: [
                    {
                        link: "./img/discordBot/1.jpg",
                        alt: "Discord screenshot"
                    }
                ],
                gitRepo: 'https://github.com/zymeg/discordbot'
            },

        ]
    }

    render() {
        return (
            <div id='portfolio' className='component' name='portfolio'>
                <h2>Portfolio</h2>

                {this.state.projects.map(e => {
                    return (<PortfolioProject info={e} />)
                })}
                
            </div>
        )
    }
}
