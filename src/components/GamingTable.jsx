import React, {useEffect, useRef} from 'react';
import {deckOfCards} from "../utills/deckOfCards";
import {Button, Container, Row} from "react-bootstrap";
import PlayerCards from "./PlayerCards";

const GamingTable = () => {

    const [deck, setDeck] = useState(shuffleCards(deckOfCards))
    const player1CardsRef = React.createRef()
    const player2CardsRef = React.createRef()

    const getCards = (count) => {
        const newDeck = [...deck]
        const playerCards = newDeck.splice(0, count)
        setDeck(newDeck)
        /*console.log(playerCards)*/
        return playerCards
    }

    const newGameFunc = () => {
        player1CardsRef.current.newGame()
        player2CardsRef.current.newGame()
        setDeck(shuffleCards(deckOfCards))
    }

    /*console.log(deck)*/

    return (
        <div className='text-center'>
            <Container className="my-5">
                <h1 className="my-5">React Poker</h1>
                <Row className='text-center my-3'>
                    <PlayerCards title="Player 1" getCards={getCards} ref={player1CardsRef}/>
                    <PlayerCards title="Player 2" getCards={getCards} ref={player2CardsRef}/>
                </Row>
                <Button className={'btn btn-success'} onClick={newGameFunc}>New Game</Button>
            </Container>
        </div>
    );
};

export default GamingTable;