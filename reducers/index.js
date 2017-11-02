import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks (state={}, action) {
	switch (action.type) { //FIXME test
		case RECEIVE_DECKS: 
			return {
				...state, 
				...action.decks
			}
			/*
		case ADD_DECK: //FIXME test
			return {
				...state, 
				action.deck
			}
		case ADD_CARD: //FIXME test
			return {
				...state, 
				[action.deck]{
					...state[action.deck],
					[aciton.card]
				}
			}
			*/
		default: 
			return state
	}
}

export default decks
