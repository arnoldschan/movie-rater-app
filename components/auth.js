import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, AsyncStorage, Alert} from "react-native";
import { API } from "./apiService";

function Auth(props) {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isLogin, setIsLogin ] = useState(true);
    const getToken = async () => {
        const token = await AsyncStorage.getItem('token')
        if (token) props.navigation.navigate('MovieList', { token })
    }
    const saveToken = async (token) => {
        return await AsyncStorage.setItem('token', token)
    }
    const login = () => {
        new API.loginUser({ username, password })
        .then(resp=> saveToken(resp.token))
        .then(props.navigation.navigate('MovieList', { token }))
    }
    const register = () => {
        new API.registerUser({ username, password })
        .then(resp=> resp.id ? Alert.alert("Success!","Please login") : Alert.alert("Try again", resp.username? resp.username[0]: resp.password[0]))
        .then(setIsLogin(true))
    }
    useEffect( () => {
        getToken()
    }, [])
    return (
    <View style={styles.app}>
      <Text style={styles.top}>{isLogin? "Login": "Register"}</Text>
      <Text style={styles.text}>Username</Text>
      <TextInput style={styles.textInput}
        placeholder="Username"
        onChangeText={(text)=>setUsername(text)}
        autoCapitalize={'none'}
        value={username}/>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.textInput}
        placeholder="Password"
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry={true}
        autoCapitalize={'none'}
        value={password}/>
        {isLogin? <Button onPress={login}
        title="Login"/>
        : <Button onPress={register}
        title="Register"/>
        }
        <TouchableOpacity>
            {isLogin? 
                <Text style={styles.question} onPress={()=>setIsLogin(false)}>Got no any account? Register Here</Text>
                :
                <Text style={styles.question} onPress={()=>setIsLogin(true)}>Looking for login? Tap here</Text>
            }
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    app:{
        backgroundColor: '#282C35',
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        marginTop: -100,
    },
    top:{
        marginTop: 30,
        padding: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
    },
    text:{
        color: 'white',
        fontSize: 20
    },
    textInput:{
        margin: 10,
        fontSize: 20,
        backgroundColor: 'white',
        padding: 10,
    },
    question:{
        fontSize: 15,
        color: 'grey',
        margin: 10,
        marginTop: 25,
    }
})
Auth.navigationOptions = screenProps => ({
  headerShown: false,
})


export default Auth

