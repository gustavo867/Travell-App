import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { gs, colors } from '../../styles';

import Header from './components/Header';
import Stats from './components/Stats';
import About from './components/About';
import Location from './components/Location';
import Photos from './components/Photos';

export default class index extends React.Component {
    state = {
        user: {},
        isLoading: true
    }

    async componentDidMount() {
        try {
            let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo");
            let users = await res.json();

            this.setState({ user: users.results[0] }, () => {
                this.setState({ isLoading: false })
            })
        } catch(err) {
            console.log(err);
        }
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={[ gs.center, styles.container ]}>

                    <ActivityIndicator size="large"/>
                </View>
            )
        }
        return (
            <ScrollView style={styles.container}>
                <StatusBar style="light" />
                <Header user={this.state.user}/>
                <Stats/>
                <About/>
                <Location/>
                <Photos/>
            </ScrollView>
        )
    }
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg,
    }
})
