import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

//FIXME - major fix me
class DeckView extends Component {
	/*
	componentDidMount() {
		const { dispatch } = this.props

		fetchDeckResults()
		.then((decks) => dispatch(receiveDecks(decks)))

	}
	*/
	render () {
		//const { decks } = this.props

		return (
			<View>
				<Text> Deck Place Holder </Text>
			</View>
		)
	}
}

function mapStateToProps () {
	return {
	}
}

export default connect(mapStateToProps)(DeckView)
