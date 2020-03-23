import React, { Component } from 'react'
import Dogcard from './components/Dogcard'

export default class DogPage extends Component {

    state = {
        dogs: []
    }

    componentDidMount(){
        fetch('http://localhost:4000/dogs')
            .then(response => response.json())
            .then(dogs => this.setState({dogs}))
    }
    
    showCards = () => {
        return this.state.dogs.map(dog => {
            return(
                <Dogcard key={dog.id} dog={dog}/>
            )  
        })
    }

    render() {
        return (
            <div>
                {this.showCards()}
            </div>
        )
    }
}
