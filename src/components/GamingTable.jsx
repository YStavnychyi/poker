import React, {useEffect, useRef} from 'react';
import {deckOfCards} from "../utills/deckOfCards";
import {Button, Container, Row} from "react-bootstrap";
import PlayerCards from "./PlayerCards";

const GamingTable = () => {

    const log = useRef(true)
    useEffect(() => {
        if(log.current){
            log.current = false
            console.log(deckOfCards)
        }
    }, [])

    return (
        <div className='text-center'>
            <Container className="my-5">
                <h1 className="my-5">React Poker</h1>
                <Row className='text-center my-3'>
                    <PlayerCards title="Player 1"/>
                    <PlayerCards title='Player 2'/>
                </Row>
                <Button className="my-4">Draw</Button>
            </Container>
        </div>
    );
};

export default GamingTable;