import React from 'react';
import { Text, View } from 'react-native';

export default function CoinItem({coin}) {
	return(
		<View>
			<Text>{coin.name}</Text>
		</View>

	)
}