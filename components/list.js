import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { API } from "./apiService";

export default function MovieList(props) {
    const [ movies, setMovies ] = useState([{title:'Rambo',id:1}])

    useEffect(()=>{
        new API().getMovies()
        .then(resp => setMovies(resp))
    }, [movies])
  return (
    <View>
      <Text style={styles.title}>  MovieRater</Text>
        <FlatList
            data={movies}
            renderItem={({item}) => (
              <TouchableOpacity onPress={()=>{props.navigation.navigate('Detail', {movie: item})}}>
                <View style={styles.item}>
                  <Text style={styles.itemText} key={item.id}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index)=> index.toString()}
        />
      <StatusBar style="auto" />
    </View>
  );
}
MovieList.navigationOptions = screenProps => ({
  headerShown: false,
})

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
    textAlignVertical: 'center',
    padding: 50,
    paddingTop: 80,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  icon:{
    color: 'white',
    transform: [{rotate: '30deg'}],
    backgroundColor: '#282C35'
  }
});
