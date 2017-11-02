import React from 'react';
import { View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo' 
import DecksView from './components/DecksView'
import AddDeck from './components/AddDeck'

const Tabs = TabNavigator({
  DecksView : {
    screen: DecksView,
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

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
				<FlashCardStatusBar />
				<Tabs />
      </View>
    );
  }
}
