import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'


export default class DeckCard extends Component {
  render () {
    return (
      <View style={styles.deck}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Deck Name</Text>
        <Text style={{fontSize: 14, color: gray, textAlign: 'center'}}>{10} Cards</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	deck: {
		marginTop: 10,
	}
})
