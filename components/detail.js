import React from 'react';
import { View, Text, StyleSheet} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Detail(props) {
    const movie = props.navigation.getParam('movie')
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
    }
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
    starWhite:{
        color: 'white',
    }
})