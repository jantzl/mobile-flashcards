import { StyleSheet } from 'react-native'
import { black, gray } from './colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	textContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
		margin: 5,
  },
	addCardContainer: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
		margin: 5,
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
  },
  subheader: {
    textAlign: 'center',
    fontSize: 22,
    color: gray,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
	input: {
		height:40, 
		width:300, 
		borderColor: black, 
		borderWidth:1, 
		borderRadius: 4, 
		marginTop: 40,
		paddingLeft: 10, 
		paddingRight: 10, 
		fontSize: 22,
	},
})
