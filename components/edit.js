import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button} from "react-native";

export default function Edit(props) {
    const movie = props.navigation.getParam('movie')
    const [ title, setTitle ] = useState(movie.title)
    const [ description, setDescription ] = useState(movie.description)

  return (
    <View style={styles.app}>
      <Text style={styles.text}>Title</Text>
      <TextInput style={styles.textInput}
        placeholder="Title"
        onTextChange={(text)=>setTitle(text)}
        value={title}/>
      <Text style={styles.text}>Description</Text>
      <TextInput style={styles.textInput}
        placeholder="Description"
        onTextChange={(text)=>setDescription(text)}
        value={description}/>
        <Button onPress={()=>props.navigation.goBack()}
        title="Save"/>
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
        color: 'white',
        fontSize: 24
    },
    textInput:{
        margin: 10,
        fontSize: 24,
        backgroundColor: 'white',
        padding: 10,
    },
})