import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet } from 'react-native'
import FlashButton from './FlashButton'
import { green, red, white } from '../utils/colors'
import { styles } from '../utils/styles'

class QuizView extends Component {
	static navigationOptions = ({ navigation }) => {
		const { deckId } = navigation.state.params

		return {
			title: deckId
		}
	}

	correct = () => {
		console.log('correct')
	}

	incorrect = () => {
		console.log('incorrect')
	}

	render () {
		const { deck } = this.props

		return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.header}>FIXME Question</Text>
					<Text style={styles.subheader}>FIXME Answer</Text>
				</View>
				<View style={styles.buttonContainer}>
					<FlashButton 
						onPress={this.addCard} 
						style={{backgroundColor: green, borderColor: green}} 
						textStyle={{color: white}}
					> 
						FIXME Correct
					</FlashButton>
					<FlashButton onPress={this.startQuiz}
						style={{backgroundColor: red, borderColor: red}} 
						textStyle={{color: white}}
					> 
						FIXME Incorrect
					</FlashButton>
				</View>
			</View>
		)
	}
}

function mapStateToProps (state, { navigation }) {
	//FIXME - review this
	const { deckId } = navigation.state.params

	return {
		deckId, 
		deck: state[deckId]
	}
}

export default connect(mapStateToProps)(QuizView)
