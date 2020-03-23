import React, { Component } from 'react'
import FrontDogcard from './components/FrontDogcard'
import BackDogcard from './components/BackDogcard'
import DogCard from './components/DogCard'
import ReactCardFlip from 'react-card-flip'

export default class DogPage extends Component {

    constructor() {
        super();
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

    componentDidMount(){
        fetch('http://localhost:4000/dogs')
            .then(response => response.json())
            .then(dogs => this.setState({dogs}))
    }
    
    showCards = () => {
        return this.state.dogs.map(dog => {

            return <DogCard dog={dog}/>
            // return(
            //     <ReactCardFlip key={dog.id} isFlipped={this.state.isFlipped} flipDirection="vertical">

            //         <FrontDogcard dog={dog} handleClick={this.handleClick}>
            //             <button onClick={this.handleClick}>Click to flip</button>
            //         </FrontDogcard>

            //         <BackDogcard dog={dog} handleClick={this.handleClick}>
            //             <button onClick={this.handleClick}>Click to flip</button>
            //         </BackDogcard>
            //     </ReactCardFlip>
            // )  
        })
    }

    render() {
        return (
            <div className='Dog-Page-Container'>
                {this.showCards()}
            </div>
        )
    }
}
