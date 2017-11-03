import { AsyncStorage } from 'react-native'
import { formatDeckResults, DECK_STORAGE_KEY }  from './_decks'

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
	.then(formatDeckResults)
}

export function getDeck(title) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
	.then(formatDeckResults)
}

export function saveDeckTitle(title) {
	//FIXME test
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: { title }, 
  }))
}

export function addCardToDeck(title, card) {
	//FIXME test
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
			questions: [ card ], 
		}
  }))
}
