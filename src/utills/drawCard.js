import {deckOfCards} from "./deckOfCards";
import {generateRandom} from "./generateRandom";

export const drawCard = () => {
    return deckOfCards.splice(generateRandom(0,deckOfCards.length), 1)[0]
}
