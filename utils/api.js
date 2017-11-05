import { AsyncStorage } from 'react-native'
import { formatDeckResults, DECK_STORAGE_KEY }  from './_decks'

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
	.then(formatDeckResults)
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: { title: title, questions: [] }, 
  }))
}

//FIXME - is overwriting array
export function addCardToDeck(title, card) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
			questions: [ card ], 
		}
  }))
}
