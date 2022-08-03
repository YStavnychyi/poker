import React, {useState} from 'react';
import {Card} from "react-bootstrap";

const GameCard = (card) => {

    const [isChoose, setIsChoose] = useState(false)

    const chooseCard = () => {
        setIsChoose(!isChoose)
    }

    return (
        <Card onClick={chooseCard} className='mx-2' style={card.suit === '♦' || card.suit === '♥' ? {
            color: "red",
            border: "1px solid red",
            width: "45rem"
        } : {width: "45rem"}}
        >
            <Card.Body style={isChoose ? {border: "1px solid gray", boxShadow: "0px 0px 2px 3px #aaa"} : undefined}>
                <Card.Title>{card.suit}</Card.Title>
                <Card.Title>{card.symbol}</Card.Title>
                <Card.Title>{card.value}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default GameCard;