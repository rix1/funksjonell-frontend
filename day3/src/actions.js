export const GAME_RESET = 'GAME_RESET';
export const CARD_FLIP = 'CARD_FLIP';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export function resetGame() {
    return {
        type: GAME_RESET
    };
}


export function flipCard(card){
    return {
        type: CARD_FLIP,
        card: card
    }
}


export function incrementScore(){
    return {
        type: UPDATE_SCORE,
    }
}
