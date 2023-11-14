import React from 'react';
import {Card} from './Card.jsx';
import {TIMEOUT} from "../settings";

export function Grid({images = [], finishedItems, visibleItems, typeOfGame}) {
    const [selectedItems, setSelected] = React.useState([])
    const handleCardClick= (id) => {
        if(selectedItems.includes(id) || finishedItems.includes(id)) {
            return
        }
        switch (selectedItems.length) {
            case 0:
                setSelected([id]);
                break;
            case 1:
                setSelected((items) => [...items, id]);
                visibleItems(selectedItems[0], id);
                setTimeout(() => {
                    setSelected([]);
                }, TIMEOUT)
                break;
            default:
                setSelected([])
        }
    }

    return (
        <ul className={`cards cards-theme-${typeOfGame}`}>
            {images.map((item) => (
                <Card
                    item={item}
                    key={item.id}
                    isVisible={selectedItems.includes(item.id)}
                    isFinished={finishedItems.includes(item.id)}
                    onCardClick={handleCardClick}
                />
            ))
            }
        </ul>
    )
}