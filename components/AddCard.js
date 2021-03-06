import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import FlashButton from './FlashButton'
import { white, black } from '../utils/colors'
import { styles } from '../utils/styles'
import { addCard } from '../actions/'

class AddCard extends Component {
	state = {
		question: null,
		answer: null,
		error: null,
	}

  submit = () => {
		const { deckId, navigation } = this.props

		if ((this.state.question==null) || (this.state.answer==null)) {
			this.setState({error: 'Please enter both a question and answer.'})
		} else {
			const card = {
				question: this.state.question,
				answer: this.state.answer,
				error: null,
			}
			this.props.dispatch(addCard(deckId, card))
			navigation.goBack()
		}
  }

  render () {
    return (
      <View style={styles.container}> 
				<View style={styles.addCardContainer}>
			    {this.state.error &&
            <Text style={styles.error}>
              {this.state.error}
            </Text>
          }
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
            Create Card
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
