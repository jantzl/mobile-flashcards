import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import FlashButton from './FlashButton'
import { white, black } from '../utils/colors'
import { styles } from '../utils/styles'
import { addDeck } from '../actions/'
import { connect } from 'react-redux'

class AddDeck extends Component {
	state = {
		text: null,
	}

  submit = () => {
    const { navigation } = this.props
    const newDeck = this.state.text

    this.props.dispatch(addDeck(newDeck))

		// FIXME reset input value
		this.setState(() => {text: ''})
    navigation.goBack()
  }

	//FIXME want the input to clear the keyboard here
  render () {
    return (
      <View style={styles.container}> 
				<View style={styles.textContainer}>
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
            Submit
          </FlashButton>
				</View>
      </View>
    )
  }
}

export default connect()(AddDeck)
