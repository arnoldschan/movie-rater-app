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
    <View>
      <Text style={styles.title}>  MovieRater</Text>
        <FlatList
            data={movies}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.itemText} key={item.id}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item, index)=> index.toString()}
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
  item: {
    flex:1,
    backgroundColor: '#282C35',
    padding: 10,
    height: 50,
  },
  itemText:{
    color: 'white',
    fontSize: 24,
  },
  title:{
    backgroundColor: '#282C35',
    color: 'orange',
    fontSize: 40,
    textAlign: 'center',
    padding: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
  icon:{
    color: 'white',
    transform: [{rotate: '30deg'}],
    backgroundColor: '#282C35'
  }
});
