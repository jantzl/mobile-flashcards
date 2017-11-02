import React from 'react'
import { View, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo' 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DeckListView from './components/DeckListView'
import AddDeck from './components/AddDeck'
import reducer from './reducers'

const Tabs = TabNavigator({
  DeckListView : {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'My Decks',
      tabBarIcon: ({tintColor}) =>  <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />
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

/*
const MainNavigator = StackNavigator({
	Home: {
		screen: Tabs, 
	}, 

})
*/

export default class App extends React.Component {
	/* add notification here 
	componentDidMount () {
		setLocalNotification()
	}
	 * */
  render() {
    return (
			<Provider store={createStore(reducer)}>
				<View style={{flex: 1}}>
					<FlashCardStatusBar />
					<Tabs />
				</View>
			</Provider>
    )
  }
}
