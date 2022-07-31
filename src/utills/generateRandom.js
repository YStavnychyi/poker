import {deckOfCards} from "./deckOfCards";

export const generateRandom = (min,max) => Math.floor(Math.random() * (max - min) + min)
    /*
    deckOfCards[Math.floor(Math.random() * deckOfCards.length)]
    console.log(text)
    const index = deckOfCards.indexOf(text)
    console.log(index)
    deckOfCards.splice(index)
    return deckOfCards*/