import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import "../css/gameCard.css"

const GameCard = (card) => {

    const [isChoose, setIsChoose] = useState(false)

    const chooseCard = () => {
        setIsChoose(!isChoose)
        console.log(isChoose)
    }

    return (
        <Card onClick={chooseCard}
            className={`mx-2 
            ${card.suit === '♦' || card.suit === '♥' ? 'red-card' : ''} 
            ${card.faceCards ? '' : 'back-of-card'}
            ${isChoose ? 'choose-card' : ''}`}
            style={{width: "45rem"}}
        >
            <Card.Body>
                <Card.Title>{card.faceCards ? card.suit : ''}</Card.Title>
                <Card.Title>{card.faceCards ? card.symbol : ''}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default GameCard;