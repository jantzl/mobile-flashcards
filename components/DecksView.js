import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DeckCard from './DeckCard'

export default class DecksView extends Component {
	render () {
		return (
			<View>
				<DeckCard />
			</View>
		)
	}
}
