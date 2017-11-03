import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet } from 'react-native'
import FlashButton from './FlashButton'
import { white, black } from '../utils/colors'
import { styles } from '../utils/styles'

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
				<View style={styles.textContainer}>
					<Text style={styles.header}>{deck.title}</Text>
					<Text style={styles.subheader}>{deck.questions.length} cards</Text>
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

function mapStateToProps (state, { navigation }) {
	const { deckId } = navigation.state.params

	return {
		deckId, 
		deck: state[deckId]
	}
}

export default connect(mapStateToProps)(DeckView)
