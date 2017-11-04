import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import DeckCard from './DeckCard'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckListView extends Component {
	componentDidMount() {
		const { dispatch } = this.props

		getDecks()
		.then((decks) => dispatch(receiveDecks(decks)))

	}
	render () {
		const { decks, navigation } = this.props

		return (
			<View>
				{Object.keys(decks).map((key) =>{
					const value = decks[key]
					return (<DeckCard key={key} name={value.title} num_cards={value.questions.length} navigation={navigation} />)
				})}
			</View>
		)
	}
}

function mapStateToProps (decks) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(DeckListView)
