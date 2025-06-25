import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import BusTrackingScreen from './screens/BusTrackingScreen';
import BuyPassScreen from './screens/BuyPassScreen';
import PlanRouteScreen from './screens/PlanRouteScreen';
import ProfileScreen from './screens/ProfileScreen'; // Import movido para cá

export type RootStackParamList = {
  Home: undefined;
  BusTracking: undefined;
  BuyPass: undefined;
  PlanRoute: undefined;
  Profile: undefined; // Adicionado aqui
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BusTracking" component={BusTrackingScreen} />
        <Stack.Screen name="BuyPass" component={BuyPassScreen} />
        <Stack.Screen name="PlanRoute" component={PlanRouteScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
