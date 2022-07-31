import React from 'react';
import {Card} from "react-bootstrap";

const GameCard = (card) => {
    return (
        <Card className='mx-2' style={card.suit === '♦' || card.suit === '♥' ? {color: "red", border: "1px solid red", width: "45rem"} : {width: "45rem"}}>
            <Card.Body >
                <Card.Title>{card.suit}</Card.Title>
                <Card.Title>{card.symbol}</Card.Title>
                <Card.Title>{card.value}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default GameCard;