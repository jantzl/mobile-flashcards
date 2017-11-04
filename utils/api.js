import { AsyncStorage } from 'react-native'
import { formatDeckResults, DECK_STORAGE_KEY }  from './_decks'

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
	.then(formatDeckResults)
}


// FIXME not sure this is needed
/*
export function getDeck(title) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
	.then(formatDeckResults)
}
*/

//FIXME test
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: { title }, 
  }))
}

//FIXME test
export function addCardToDeck(title, card) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
			questions: [ card ], 
		}
  }))
}
