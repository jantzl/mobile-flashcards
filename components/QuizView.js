import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import FlashButton from './FlashButton'
import { green, red, white, gray, black } from '../utils/colors'
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

	componentWillMount() {
		this.animatedValue = new Animated.Value(0)
		this.value = 0 
		this.animatedValue.addListener(({ value }) => {
			this.value = value
		})
		this.setState(() => ({
			frontOpacity: new Animated.Value(1),
			backOpacity: new Animated.Value(0),
		}))
		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180], 
			outputRange: ['0deg', '180deg'],
		})
		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180], 
			outputRange: ['180deg', '360deg'],
		})
	}

	correct = (increase) => {
		// if the back of the card is showing when you want to transition, 
		// hide the face, then flip, then transition
		if (this.value >= 90) {
			this.state.backOpacity.setValue(0)
			this.flip()
		}
		this.setState(() => ({
			position: this.state.position + 1, 
			score: this.state.score + increase,
		}))
	}

	flip() {
		// NOTE: This looks like an overly complicated animation, but it is
		// because the system I have tested on is Android and the backfaceVisbility 
		// property does not seem to be well supported on Android, or at least the
		// version I'm testing on. I see it in the spec and posts about using it, 
		// but I found that it did not work properly on my system. 
		// So I addressed it by animating Opacity transition
		const timeChange = 1000
		const toFront = {
			toValue: 1, 
			duration: timeChange,
		}
		const toBack = {
			toValue: 0, 
			duration: timeChange,
		}
		if (this.value >= 90) {
			Animated.parallel([
				Animated.spring(this.animatedValue, {
					toValue: 0, 
					friction: 6, 
					tension: 20,
				}),
				Animated.timing(this.state.frontOpacity, toFront),
				Animated.timing(this.state.backOpacity, toBack),
			]).start()
		} else {
			Animated.parallel([
				Animated.spring(this.animatedValue, {
					toValue: 180, 
					friction: 6, 
					tension: 20,
				}),
				Animated.timing(this.state.frontOpacity, toBack),
				Animated.timing(this.state.backOpacity, toFront),
			]).start()
		}
	}

	render () {
		const { deck } = this.props
		const { position, score, frontOpacity, backOpacity } = this.state
		const numQuestions = deck.questions.length
		const frontAnimatedStyle = {
			transform: [
				{ rotateY: this.frontInterpolate },
				{ perspective: 1000 }
			]
		}
		const backAnimatedStyle = {
			transform: [
				{ rotateY: this.backInterpolate },
				{ perspective: 1000 }
			]
		}

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
				<View> 
					<Text style={{fontSize: 20}}>{position+1}/{numQuestions}</Text>
				</View>
				<View style={[styles.textContainer, {backgroundColor: gray}]}>
					<Animated.View style={[styles.flipCard, frontAnimatedStyle, { opacity: frontOpacity}]}>
						<Text style={styles.header}>{question.question}</Text>
						<TouchableOpacity onPress={() => this.flip()}>
							<Text style={[styles.subheader, styles.flipCardText]}>Answer</Text>
						</TouchableOpacity>
					</Animated.View>
					<Animated.View style={[styles.flipCard, backAnimatedStyle, styles.flipCardBack, {opacity: backOpacity}]}>
						<Text style={styles.header}>{question.answer}</Text>
						<TouchableOpacity onPress={() => this.flip()}>
							<Text style={[styles.subheader, styles.flipCardText]}>Question</Text>
						</TouchableOpacity>
					</Animated.View>
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
