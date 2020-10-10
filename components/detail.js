import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { API } from './apiService';

export default function Detail(props) {
    const movie = props.navigation.getParam('movie', '')
    const token = props.navigation.getParam('token', '')
    console.log(token)
    const [highlight, setHighlight] = useState(0)
    const saveRating = () => {
        new API(token).updateRating(movie.id, highlight)
        .then(resp=> Alert.alert("Rating", resp.message))
    }
  return (
    <View style={styles.app}>
      <View style={styles.starContainer}>
        <FontAwesomeIcon style={movie.avg_rating > 0? styles.starOrange : styles.starWhite} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 1? styles.starOrange : styles.starWhite} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 2? styles.starOrange : styles.starWhite} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 3? styles.starOrange : styles.starWhite} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 4? styles.starOrange : styles.starWhite} icon={faStar}/>
        <Text style={styles.text}>({movie.no_of_rating})</Text>
      </View>
      <Text style={styles.text}>{movie.description}</Text>
      <View style={{borderColor: 'orange', borderWidth: 1, margin:10}}/>
      <View style={styles.starContainer}>
        <FontAwesomeIcon style={highlight > 0? styles.starPurple : styles.starGrey} icon={faStar} onPress={()=>setHighlight(1)} size={36}/>
        <FontAwesomeIcon style={highlight > 1? styles.starPurple : styles.starGrey} icon={faStar} onPress={()=>setHighlight(2)} size={36}/>
        <FontAwesomeIcon style={highlight > 2? styles.starPurple : styles.starGrey} icon={faStar} onPress={()=>setHighlight(3)} size={36}/>
        <FontAwesomeIcon style={highlight > 3? styles.starPurple : styles.starGrey} icon={faStar} onPress={()=>setHighlight(4)} size={36}/>
        <FontAwesomeIcon style={highlight > 4? styles.starPurple : styles.starGrey} icon={faStar} onPress={()=>setHighlight(5)} size={36}/>
    </View>
        <Button title="Save" onPress={saveRating}/>
    </View>
  );
}

Detail.navigationOptions = screenProps => ({
    title: screenProps.navigation.getParam('movie').title,
    headerStyle: {
        backgroundColor: 'orange',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24
    },
    headerRight: (
        <Button title="Edit" color="white"
        onPress={()=>{screenProps.navigation.navigate("Edit", {movie: screenProps.navigation.getParam('movie'),
                                                               token: screenProps.navigation.getParam('token')})}}/>
    )
})
const styles = StyleSheet.create({
    app:{
        backgroundColor: '#282C35',
        flex: 1,
        padding: 10,
    },
    text:{
        color: 'white'
    },
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starOrange:{
        color: 'orange',
    },
    starPurple:{
        color: 'purple',
    },
    starGrey:{
        color: 'grey',
    },
    starWhite:{
        color: 'white',
    }
})