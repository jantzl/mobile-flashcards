import React from 'react';
import { StyleSheet, View } from 'react-native';
import DecksView from './components/DecksView'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
				<DecksView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
