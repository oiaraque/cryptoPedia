import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function CoinItem({coin}) {
	return(
		<View style={styles.containerItems}>
			<View style={styles.coinName}>
				<Text style={styles.text}>{coin.name}</Text>
				<Image
					style={styles.image}  
					source={{uri: coin.image}}
				/>				
			</View>
			<Text style={styles.text}>${coin.current_price}</Text>
		</View>

	)
}

const styles = StyleSheet.create({
	containerItems: {
		backgroundColor: '#121212',
		paddingTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between' 
	},
	coinName: {
		flexDirection: 'row-reverse'
	},
	image: {
		width: 30,
		height: 30
	},
	text: {
		color: '#ffffff'
	}
})