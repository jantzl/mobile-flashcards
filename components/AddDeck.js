import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import FlashButton from './FlashButton'
import { white, black } from '../utils/colors'
import { styles } from '../utils/styles'

export default class AddDeck extends Component {
	state = {
		text: null,
	}

  submit = () => {
    console.log('add deck')
  }

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
            FIXME Submit
          </FlashButton>
				</View>
      </View>
    )
  }
}
