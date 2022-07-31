import React from 'react';
import {Col} from "react-bootstrap";
import GameCard from "./GameCard";

const Cards = ({cards}) => {

    return (
        <>
            <Col className='col-12 d-flex justify-content-center'>
                {
                    cards.map(({symbol, suit}, value) => (
                        <GameCard symbol={symbol} suit={suit} key={value}/>
                    ))
                }
            </Col>
        </>
    );
};

export default Cards;