import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gs, colors } from '../../../styles'

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>About Me</Text>
      <Text style={styles.about}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis, id nostrum omnis ea perspiciatis esse deleniti soluta eius ut earum nulla corrupti facilis officiis reprehenderit deserunt eum iste possimus.</Text>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },

    about: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.darkHl,
        marginTop: 8,
        lineHeight: 22,
    },
})
