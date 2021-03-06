import React from 'react'
import { View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo' 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import QuizView from './components/QuizView'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'
import { white, black } from './utils/colors'

const Tabs = TabNavigator({
  DeckListView : {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'My Decks',
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
    },
  }
},
{
  navigationOptions: {
    header: null
  },
})

function FlashCardStatusBar ({...props}) {
	return (
		<View style={{height: Constants.statusBarHeight}}>
			<StatusBar translucent {...props} />
		</View>
	)
}

const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs, 
	}, 
	DeckView: {
		screen: DeckView, 
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: black,
			}
		},
	},
	AddCard: {
		screen: AddCard, 
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: black,
			}
		},
	},
	QuizView: {
		screen: QuizView, 
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: black,
			}
		},
	},
})

export default class App extends React.Component {
	componentDidMount () {
		setLocalNotification()
	}
  render() {
    return (
			<Provider store={createStore(reducer)}>
				<View style={{flex: 1}}>
					<FlashCardStatusBar />
					<MainNavigator />
				</View>
			</Provider>
    )
  }
}
