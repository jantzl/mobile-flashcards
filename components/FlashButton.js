import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function FlashButton ({children, onPress, textStyle={}, style={}}) {
  return (
		<View style={{padding: 5}}>
			<TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
				<Text style={[styles.btnText, textStyle]}>{children}</Text>
			</TouchableOpacity>
		</View>
  )
}

const styles = StyleSheet.create({
  btn: {
		justifyContent: 'center',
		width: 200, 
		height: 50,
		borderRadius: 4,
		borderWidth: 1,
  },
  btnText: {
    textAlign: 'center',
		fontSize: 20,
	},
})
