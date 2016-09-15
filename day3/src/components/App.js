import React from 'react';
import { connect } from 'react-redux';

import {cards, game} from '../data.js';

import Game from '../components/Game';

const App = props => (

    <Game
        cards={ props.cards }
        flips={ props.game.flips }
        bestScore={ props.game.bestScore }
    />
);

App.propTypes = {
    cards: React.PropTypes.array,
    game: React.PropTypes.shape({
        flips: React.PropTypes.number,
        bestScore: React.PropTypes.number,
    })
};

export default connect(state => ({
    cards: state.cards,
    game: state.game
}))(App);
