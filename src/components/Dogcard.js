import React from 'react'

export default function Dogcard({dog}) {
    return (
        <div className="dog-card">
            <h2>{dog.name}</h2>
            <img src={dog.image_url}/>
            <h3>{dog.breed}</h3>
            <h3>{dog.age} years old</h3>
            <h3>{dog.gender}</h3>
            <p>{dog.description}</p>
        </div>
    )
}

