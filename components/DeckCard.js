import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { gray, black } from '../utils/colors'


export default class DeckCard extends Component {
	render () {
		const { name, num_cards, navigation } = this.props
		return (
			<TouchableOpacity 
				style={styles.deck}
				onPress={() => navigation.navigate('DeckView', { deckId: name })}
			>
				<Text style={{fontSize: 20, textAlign: 'center'}}>{name}</Text>
				<Text style={{fontSize: 14, color: gray, textAlign: 'center'}}>{num_cards} Cards</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	deck: {
		marginTop: 10,
		padding: 40,
		borderBottomWidth: 1, 
		borderColor: black,
	}
})
