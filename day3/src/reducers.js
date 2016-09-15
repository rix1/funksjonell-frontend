import { combineReducers } from 'redux';

import {
    GAME_RESET, CARD_FLIP, UPDATE_SCORE
} from './actions';

export const initialGameState = {
    flips: 0,
    bestScore: 0
}


const initialStateCards = [
                              { id: 0, item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 1,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 2,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 3,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 4,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 5,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 6,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 7,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 8,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 9,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 10,item: 'http://placehold.it/200x200', matched: false, open: false},
                              { id: 11,item: 'http://placehold.it/200x200', matched: false, open: false},
                          ];

const cardsReducer = (state = initialStateCards, action) => {
    switch (action.type) {
    case GAME_RESET:
        // console.log('The game reset action creator was called');
        return state.map((card) => {
            // console.log("Matching card: " + card.id);
            return Object.assign({}, card, {matched: false, open: false})
        })
        break;
    case CARD_FLIP:
        // console.log(action);
        return state.map((card) => {
            if(card.id === action.card.id){
                return Object.assign({}, card, {open: !card.open})
            }else{
                return card;
            }
        });
        break;
    default:
        return state;
    }
}

const gameReducer = (state = initialGameState, action) => {
    switch (action.type) {
        case UPDATE_SCORE:
        console.log("Upding score");
            return Object.assign({}, state, {flips: state.flips+1})
            break;
        case GAME_RESET:
        console.log("resetung game from gameReudic");
            return Object.assign({}, state, {flips: 0, bestScore: state.flips})
        default:
            return state;
    }
}

export default combineReducers({
    cards: cardsReducer,
    game: gameReducer
});
