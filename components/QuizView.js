import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import FlashButton from './FlashButton'
import { green, red, white } from '../utils/colors'
import { styles } from '../utils/styles'

class QuizView extends Component {
	state = {
		position: 0, 
		score: 0,
	}

	static navigationOptions = ({ navigation }) => {
		const { deckId } = navigation.state.params

		return {
			title: deckId
		}
	}

	correct = (increase) => {
		this.setState(() => ({
			position: this.state.position + 1, 
			score: this.state.score + increase,
		}))
	}

	render () {
		const { deck } = this.props
		const { position, score } = this.state
		const numQuestions = deck.questions.length
		console.log('num questions ' + numQuestions)
		console.log('position ' + position)

		if (position >= numQuestions) {
			const percentCorrect = Math.round((score / numQuestions)*100)
			return (
				<View style={styles.container}>
					<View style={styles.textContainer}>
							<Text style={styles.header}>
								Great job studying! You got {percentCorrect}% correct
							</Text>
					</View>
				</View>
			)
		}
		
		const question = deck.questions[position]

		return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.header}>{question.question}</Text>
					<TouchableOpacity>
						<Text style={styles.subheader}>FIXME Answer</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonContainer}>
					<FlashButton 
						onPress={() => this.correct(1)} 
						style={{backgroundColor: green, borderColor: green}} 
						textStyle={{color: white}}
					> 
						Correct
					</FlashButton>
					<FlashButton onPress={() => this.correct(0)}
						style={{backgroundColor: red, borderColor: red}} 
						textStyle={{color: white}}
					> 
						Incorrect
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

export default connect(mapStateToProps)(QuizView)
