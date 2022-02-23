import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, FiltersScreen} from '@Screens';

export type RootStackParamListApp = {
  Home: undefined;
  Filters: undefined;
};

const Home = createNativeStackNavigator<RootStackParamListApp>();

export const HomeStack = () => {
  return (
    <Home.Navigator
      screenOptions={{
        title: 'TravelList',
        headerLargeTitle: true,
      }}>
      <Home.Group>
        <Home.Screen name="Home" component={HomeScreen} />
      </Home.Group>

      <Home.Group
        screenOptions={{
          presentation: 'modal',
          title: 'Filters',
          headerLargeTitle: false,
        }}>
        <Home.Screen
          name="Filters"
          component={FiltersScreen}
          options={{gestureEnabled: true}}
        />
      </Home.Group>
    </Home.Navigator>
  );
};
