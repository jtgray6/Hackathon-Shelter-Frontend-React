import React, { Component } from 'react'
import BackDogcard from './BackDogcard'
import FrontDogcard from './FrontDogcard'
import ReactCardFlip from 'react-card-flip'

export default class DogCard extends Component {

    constructor(props) {
        super(props);
          this.state = {
            dogs: [],
            isFlipped: false
            };
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    showCards = () => {
        const {dog} = this.props

        return(
            <ReactCardFlip key={dog.id} isFlipped={this.state.isFlipped} flipDirection="vertical">

                <FrontDogcard dog={dog} handleClick={this.handleClick}>
                    <button onClick={this.handleClick}>Click to flip</button>
                </FrontDogcard>

                <BackDogcard dog={dog} handleClick={this.handleClick}>
                    <button onClick={this.handleClick}>Click to flip</button>
                </BackDogcard>
            </ReactCardFlip>
        )  
    }

    render() {
        return (
            <div>
                {this.showCards()}
            </div>
        )
    }
}