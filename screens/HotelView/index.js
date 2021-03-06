import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { colors } from '../../styles';
import Header from './components/Header';
import Bookmark from './components/Bookmark';
import About from './components/About';
import Stats from './components/Stats';
import Amenities from './components/Amenities';
import Address from './components/Address';
import Extras from './components/Extras';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
       <StatusBar style="light" />
        <Header/>

        <View>
          <Bookmark/>
          <About/>
          <Stats/>
          <Amenities/>
          <Address/>
          <Extras/>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
