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

	render () {
		const { deck, navigation } = this.props

		return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.header}>{deck.title}</Text>
					<Text style={styles.subheader}>{deck.questions.length} cards</Text>
				</View>
				<View style={styles.buttonContainer}>
					<FlashButton 
						onPress={() => navigation.navigate('AddCard', { deckId: deck.title })}
						style={{backgroundColor: white, borderColor: black}} 
						textStyle={{color: black}}
					> 
						Add Card
					</FlashButton>
					{deck.questions.length>0 && 
						<FlashButton 
							onPress={() => navigation.navigate('QuizView', { deckId: deck.title })}
							style={{backgroundColor: black, borderColor: black}} 
							textStyle={{color: white}}
						> 
							Start Quiz
						</FlashButton>
					}
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
