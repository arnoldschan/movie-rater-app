import React from 'react';
import MovieList from "./components/list";
import Detail from "./components/detail";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator({
  MovieList: {screen: MovieList},
  Detail: {screen: Detail}
})
const App = createAppContainer(AppNavigator);

export default App;