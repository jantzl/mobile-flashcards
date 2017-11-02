import { AsyncStorage } from 'react-native'
import { formatDeckResults, DECK_STORAGE_KEY }  from './_decks'

export function fetchDeckResults () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
	.then(formatDeckResults)
}

// FIXME - review/test this
export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: entry,
  }))
}

// FIXME - review/test this
export function removeEntry(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then((results) => {
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
  })
}
