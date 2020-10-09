import React from 'react';
import { View, Text } from "react-native";

export default function Detail(props) {
    const movie = props.navigation.getParam('movie')
  return (
    <View>
      <Text> Detail about {movie.title}</Text>
    </View>
  );
}

