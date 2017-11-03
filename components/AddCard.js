import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import FlashButton from './FlashButton'
import { white, black } from '../utils/colors'
import { styles } from '../utils/styles'

class AddCard extends Component {
	state = {
		question: null,
		answer: null,
	}

	//FIXME
  submit = () => {
    console.log('add card')
  }

  render () {
    return (
      <View style={styles.container}> 
				<View style={styles.textContainer}>
					<TextInput 
						placeholder='Question'
						style={styles.input}
						maxLength={40}
						value={this.state.question} 
						onChangeText={(question) => this.setState({question})}
					/>
					<TextInput 
						placeholder='Answer'
						style={styles.input}
						maxLength={40}
						value={this.state.answer} 
						onChangeText={(answer) => this.setState({answer})}
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

function mapStateToProps (state, { navigation }) {
  const { deckId } = navigation.state.params

  return {
    deckId,
    deck: state[deckId]
  }
}

export default connect(mapStateToProps)(AddCard)
