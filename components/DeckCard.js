import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'


export default function DeckCard ({name, num_cards}) {
	return (
		<View style={styles.deck}>
			<Text style={{fontSize: 20, textAlign: 'center'}}>{name}</Text>
			<Text style={{fontSize: 14, color: gray, textAlign: 'center'}}>{num_cards} Cards</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	deck: {
		marginTop: 10,
		padding: 40,
	}
})
