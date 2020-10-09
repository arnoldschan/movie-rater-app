import React from 'react';
import { View, Text, StyleSheet} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Detail(props) {
    const movie = props.navigation.getParam('movie')
  return (
    <View>
      <Text>{movie.title}</Text>
      <View style={styles.starContainer}>
        <FontAwesomeIcon style={movie.avg_rating > 0? styles.starOrange : styles.starWhite} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 1? styles.starOrange : styles.starWhite} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 2? styles.starOrange : styles.starWhite} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 3? styles.starOrange : styles.starWhite} icon={faStar}/>
        <FontAwesomeIcon style={movie.avg_rating > 4? styles.starOrange : styles.starWhite} icon={faStar}/>
        <Text>({movie.no_of_rating})</Text>
      </View>
      <Text>{movie.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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