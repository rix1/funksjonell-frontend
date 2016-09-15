import React from 'react';
import { connect } from 'react-redux';

import Score from './Score';
import BestScore from './BestScore';
import ResetGame from './ResetGame';
import Board from './Board';
import {
    resetGame,
    flipCard
} from '../actions';

const Game = ( props ) => {

 const handleCardClick = (some) => {
     props.dispatch(flipCard(some));
 };

  return (
    <div className='game'>
      <h1>Memory game</h1>
      <Score score={ props.flips } />
      <BestScore bestScore={ props.bestScore } />
      <ResetGame onButtonClick={() => props.dispatch(resetGame())}/>
      <Board cards={ props.cards } onCardClick={ (arg) => handleCardClick(arg)}/>
    </div>
  )
}

export default connect()(Game); // connecting game to store...
