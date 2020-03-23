import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function FrontDogcard({dog, handleClick}) {
    return (
        <div className='dog-card'>
            <Card style={{width: '18rem'}}>
                <Card.Header>{dog.name}</Card.Header>
                <Card.Img variant='top' src={dog.image_url} className='dog-card-img' />
                <button onClick={handleClick}>Click to flip</button>
            </Card>
        </div>
    )
}

