import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet } from 'react-native'
import FlashButton from './FlashButton'
import { white, black, gray } from '../utils/colors'

class DeckView extends Component {
	static navigationOptions = ({ navigation }) => {
		const { deckId } = navigation.state.params

		return {
			title: deckId
		}
	}

	addCard = () => {
		console.log('add card')
	}

	startQuiz = () => {
		console.log('start quiz')
	}

	render () {
		const { deck } = this.props

		return (
			<View style={styles.container}>
				<View style={styles.deckInfoContainer}>
					<Text style={styles.deckName}>{deck.title}</Text>
					<Text style={styles.deckSize}>{deck.questions.length} cards</Text>
				</View>
				<View style={styles.buttonContainer}>
					<FlashButton 
						onPress={this.addCard} 
						style={{backgroundColor: white, borderColor: black}} 
						textStyle={{color: black}}
					> 
						FIXME Add Card
					</FlashButton>
					<FlashButton onPress={this.startQuiz}
						style={{backgroundColor: black, borderColor: black}} 
						textStyle={{color: white}}
					> 
						FIXME Start Quiz
					</FlashButton>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}, 
	deckInfoContainer: {
		flex:1, 
		justifyContent: 'center',
	},
	deckName: {
		textAlign: 'center', 
		fontSize: 40,
	},
	deckSize: {
		textAlign: 'center', 
		fontSize: 22, 
		color: gray,
	},
	buttonContainer: {
		justifyContent: 'flex-end', 
		alignItems: 'center', 
		paddingBottom: 40,
	},
})

function mapStateToProps (state, { navigation }) {
	const { deckId } = navigation.state.params

	return {
		deckId, 
		deck: state[deckId]
	}
}

export default connect(mapStateToProps)(DeckView)
