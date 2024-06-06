/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesName} from './routesName';
import {SessionScreen} from '../screens/SessionScreen';
import {DashboardScreen} from '../screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routesName.session}>
        <Stack.Screen name={routesName.session} component={SessionScreen} />
        <Stack.Screen name={routesName.dashboard} component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
