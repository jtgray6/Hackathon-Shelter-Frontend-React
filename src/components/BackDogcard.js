import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function BackDogcard({dog, handleClick}) {
    return (
        <div className='dog-card'>
            <Card style={{width: '18rem'}}>
                <Card.Header>{dog.name}</Card.Header>
                <Card.Body>
                    <Card.Text>{dog.description}</Card.Text>
                </Card.Body>
                <ListGroup variant='flush'>
                    <ListGroup.Item>Breed: {dog.breed}</ListGroup.Item>
                    <ListGroup.Item>Age: {dog.age} years old</ListGroup.Item>
                    <ListGroup.Item>Gender: {dog.gender}</ListGroup.Item>
                </ListGroup>
                <button onClick={handleClick}>Click to flip</button>
            </Card>
        </div>
    )
}
