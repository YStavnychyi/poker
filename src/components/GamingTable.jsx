import React, {useEffect, useRef} from 'react';
import {deckOfCards} from "../utills/deckOfCards";
import {Button, Container, Row} from "react-bootstrap";
import PlayerCards from "./PlayerCards";

const GamingTable = () => {

    const [deck, setDeck] = useState(shuffleCards(deckOfCards))

    const getCards = (count) => {
        const newDeck = [...deck]
        const playerCards = newDeck.splice(0,count)
        setDeck(newDeck)
        console.log(playerCards)
        return playerCards
    }

    return (
        <div className='text-center'>
            <Container className="my-5">
                <h1 className="my-5">React Poker</h1>
                <Row className='text-center my-3'>
                    <PlayerCards title="Player 1"/>
                    <PlayerCards title='Player 2'/>
                </Row>
            </Container>
        </div>
    );
};

export default GamingTable;