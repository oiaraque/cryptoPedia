import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function CoinItem({coin}) {
	return(
		<View style={styles.containerItems}>
			<View style={styles.coinName}>
				<Image
					style={styles.image}  
					source={{uri: coin.image}}
				/>	
				<View style={styles.textName}>
					<Text style={styles.text}>{coin.name}</Text>
					<Text style={styles.symbol}>{coin.symbol}</Text>					
				</View>			
			</View>
			<View>
				<Text style={styles.text}>${coin.current_price}</Text>
				<Text style={[
					styles.currentPrice,
					coin.price_change_percentage_24h > 0 ?
					styles.percentageGreen : styles.percentageRed
					]}>
					{coin.price_change_percentage_24h}
				</Text>				
			</View>
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
		flexDirection: 'row'
	},
	image: {
		width: 30,
		height: 30
	},
	text: {
		color: '#ffffff',
		textAlign: 'right'
	},
	symbol: {
		color: 'gray',
		textTransform: 'uppercase',
	},
	textName: {
		marginLeft: 10
	},
	currentPrice: {
		textAlign: 'right',
	},
	percentageRed: {
		color: 'red',
	},
	percentageGreen: {
		color: 'green',
	}
})