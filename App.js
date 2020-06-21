import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, ScrollView } from 'react-native';
import { colors } from './styles'
import HotelView from './screens/HotelView'

const AppStack = createStackNavigator();

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <NavigationContainer>
        <AppStack.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: "#f0f0f5"
            }
        }}
        >
          <AppStack.Screen name="HotelView" component={HotelView}/>
        </AppStack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
