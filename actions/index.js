export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
import { saveDeckTitle, addCardToDeck } from '../utils/api'

export function receiveDecks (decks) {
	return {
		type: RECEIVE_DECKS, 
		decks,
	}
}

export function addDeck (deck) {
	saveDeckTitle(deck)
	return {
		type: ADD_DECK, 
		deck: deck,
	}
}

export function addCard (deckId, card) {
	//FIXME - this is overwriting the array currently
	addCardToDeck(deckId, card)
	return {
		type: ADD_CARD, 
		deck: deckId, 
		card: card,
	}
}
