import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import HotelView from './screens/HotelView';
import ProfileView from './screens/ProfileView';

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator
            headerMode="none"
            >
                <AppStack.Screen name='ProfileView' component={ProfileView}/>
                <AppStack.Screen name='HotelView' component={HotelView}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;