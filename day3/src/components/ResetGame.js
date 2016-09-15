import React from 'react';

const ResetGame = (props) => {

	return (
		<div>
			<button onClick={ () => props.onButtonClick()}>Trykk her da</button>
		</div>
	)
}


export default ResetGame;
