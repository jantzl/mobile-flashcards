import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Text, TextInput } from 'react-native'
import FlashButton from './FlashButton'
import { white, black } from '../utils/colors'
import { styles } from '../utils/styles'
import { addDeck } from '../actions/'
import { connect } from 'react-redux'

class AddDeck extends Component {
	state = {
		text: null,
		error: null,
	}

  submit = () => {
    const { navigation } = this.props
    const newDeck = this.state.text

		if (this.state.text == null) {
			this.setState({error: 'Please input a name for the deck'})
		} else {
			this.props.dispatch(addDeck(newDeck))

			this.setState({text: null, error: null})
			navigation.navigate('DeckView', { deckId: newDeck })
		}
  }

  render () {
    return (
      <View style={styles.container}> 
				<KeyboardAvoidingView behavior="padding" style={styles.textContainer}>
					{this.state.error && 
						<Text style={styles.error}>
							{this.state.error}
						</Text>
					}
					<Text style={styles.header}>What is the title of your new deck?</Text>
					<TextInput 
						placeholder='Deck Title'
						style={styles.input}
						maxLength={40}
						value={this.state.text} 
						onChangeText={(text) => this.setState({text})}
					/>
          <FlashButton
            onPress={this.submit}
            style={{backgroundColor: black, borderColor: black, marginTop: 40}}
            textStyle={{color: white}}
          >
            Create Deck
          </FlashButton>
				</KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect()(AddDeck)
