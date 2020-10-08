import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { API } from "./apiService";

export default function MovieList() {
    const [ movies, setMovies ] = useState([{title:'Rambo',id:1}])

    useEffect(()=>{
        new API().getMovies()
        .then(resp => setMovies(resp))
    }, [])
  return (
    <View style={styles.container}>
        <FlatList
            data={movies}
            renderItem={({item}) => (
                <Text key={item.id}>{item.title}</Text>
            )}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
