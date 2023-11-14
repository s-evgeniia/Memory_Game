import React from 'react'

export  function Card({item, isVisible, isFinished, onCardClick}) {
    const className = `card ${isVisible ? 'card-show' : ''} ${isFinished ? 'card-finished' : ''}`

    const {id, url, description} = item;
    const handleClick = () => {
        onCardClick(id);
    };
    return (
        <li className={className} onClick={handleClick}>
            <img
                src={url}
                width="204"
                height="144"
                alt={description}
            />
        </li>
    )
}