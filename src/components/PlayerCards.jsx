import PropTypes from 'prop-types';
import {Card, Col} from "react-bootstrap";
import {deckOfCards} from "../utills/deckOfCards";
import React from 'react';
import {drawCard} from "../utills/drawCard";
import Cards from "./Cards";

const PlayerCards = (player) => {

    const drawCards = (n) => {
        const drawnCards = []
        for (let i = 0; i < n && deckOfCards.length > 0; i++) {
            drawnCards.push(drawCard())
        }
        return drawnCards
    }

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
};

PlayerCards.propTypes = {
    title: PropTypes.string,

};

export default PlayerCards;