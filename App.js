import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "./src/IndexScreen";
import CreateScreen from "./src/CreateScreen";
import ShowScreen from "./src/ShowScreen";
import EditScreen from "./src/EditScreen";
import {Provider} from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    IndexScreen: IndexScreen,
    CreateScreen: CreateScreen,
    ShowScreen: ShowScreen,
    EditScreen: EditScreen,
  },

  {
    initialRouteName: "IndexScreen",
    defaultNavigationOptions: {
      title: "Note Chart"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
            <App />
          </Provider>
};