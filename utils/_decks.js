import { AsyncStorage } from 'react-native'
import { getInitDecks } from './helpers'

export const DECK_STORAGE_KEY = 'LaurensFlashCards:cards'

function setDummyData () {
  let dummyData = getInitDecks()

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}

export function formatDeckResults (results) {

  return results === null
    ? setDummyData()
    : JSON.parse(results) 
}

