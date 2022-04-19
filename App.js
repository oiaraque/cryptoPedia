import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, StatusBar } from 'react-native';
import CoinItem from './components/CoinItem'

export default function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
  const [refresh, setRefresh] = useState(false)

  const loadData = async()=>{
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = await res.json();
    setCoins(data)
  }

  useEffect(()=>{
    loadData()
  }, []);

  return (
    <View style={styles.container}>
      
      <StatusBar backgroundColor='#141414'/>
      
      <View style={styles.header}>
        
        <Text style={styles.title}>CryptoPedia</Text>
        
        <TextInput style={styles.searchInput}
         placeholder = 'Find the Coin...'
         placeholderTextColor = 'gray'
         onChangeText={(text)=>text && setSearch(text)}
        />

      </View>

      <FlatList 
      style={styles.list}
      data={coins.filter(
        (coin)=>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
        )}
      renderItem={({item})=>{
        return <CoinItem coin={item}/>
      }}
      showsVerticalScrollbarIndicator={false}
      refreshing={refresh} 
      onRefresh={async()=>{
        setRefresh(true)
        await loadData()
        setRefresh(false)
      }}
      />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'rgb(242,199,0)',
    marginTop: 30,
    fontSize: 20
  },
  list:{
    width: '90%',
    marginTop: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  searchInput:{

    color: '#fff',
    borderBottomColor: '#4657CE',
    borderBottomWidth: 1,
    width: '40%',
    textAlign: 'left'  
  }
});
