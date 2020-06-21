import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gs, colors } from '../../../styles';

const hotel ={
    name: "Maldives Rangali Island",
    price: "$967",
    location: "Maldives",
    about: "Maldives is renowned for its luxurious resorts with impeccable amenities, personalized service and boundless beauty like no other."
};

export default function About() {
  return (
      <View style={styles.container}>
          <Text style={gs.title}>{hotel.name}</Text>
          <Text style={styles.info}>{hotel.price} &#8226; {hotel.location}</Text>

          <View style={gs.divider}/>

          <Text style={gs.sectionTitle}>About {hotel.name}</Text>
          <Text style={styles.about}>{hotel.about}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },

    info: {
        color: colors.textSec,
        fontWeight: '600',
        marginTop: 4,
    },

    about: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20,
    },
})
