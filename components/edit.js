import React from 'react';
import { View, Text, StyleSheet} from "react-native";

export default function Edit(props) {
    const movie = props.navigation.getParam('movie')
  return (
    <View style={styles.app}>
      <Text style={styles.text}>Edit {movie.title}</Text>
    </View>
  );
}

Edit.navigationOptions = screenProps => ({
    title: screenProps.navigation.getParam('movie').title,
    headerStyle: {
        backgroundColor: 'orange',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24
    },
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
})