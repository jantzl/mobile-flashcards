import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import DeckCard from './DeckCard'
import { fetchDeckResults } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckListView extends Component {
	componentDidMount() {
		const { dispatch } = this.props

		fetchDeckResults()
		.then((decks) => dispatch(receiveDecks(decks)))

	}
	render () {
		const { decks } = this.props

		return (
			<View>
				{Object.keys(decks).map((key) =>{
					const value = decks[key]
					return (<DeckCard key={key} name={key} num_cards={value.questions.length} />)
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
