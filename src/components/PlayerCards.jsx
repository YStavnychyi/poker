import PropTypes from 'prop-types';
import {Button, Card, Col, Container} from "react-bootstrap";
import React, {useState} from 'react';
import GameCard from "./GameCard";

const PlayerCards = React.forwardRef((player, ref) => {

    /*const drawCards = (n) => {
        const drawnCards = []
        for (let i = 0; i < n && deckOfCards.length > 0; i++) {
            drawnCards.push(drawCard())
        }
        return drawnCards
    }

    React.useImperativeHandle(ref, () => ({
        newGame
    }))

    return (
        <Col className="col-6 d-flex justify-content-center">
            <Card style={{width: '45rem', height: '12rem'}}>
                <Card.Title className="text-md-start py-2 px-2">
                    {player.title}
                </Card.Title>
                <Cards cards={drawCards(5)}/>
            </Card>
        </Col>
    );
});

PlayerCards.propTypes = {
    title: PropTypes.string,
    getCards: PropTypes.func
};

export default PlayerCards;