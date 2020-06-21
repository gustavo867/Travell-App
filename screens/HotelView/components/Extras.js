import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { gs, colors } from '../../../styles'

export default function Extras() {
  const extras = [
    "Payment at Checkout",
    "WI-FI Network is off by 3am",
    "No swimming after 12:00pm",
    "No signing while showering",
    "No Refunds"
  ]

  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>Before you go</Text>

      <View style={styles.list}>
        {extras.map((extra, key) => {
          return (
            <Text style={styles.listItem} key={key}>&mdash; {extra}</Text>
          )
        })}
      </View>

      <View style={{ marginTop: 32, marginBottom: -50 }}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={{ fontweight: '700', color: '#fff' }}>Filter</Text>
        </TouchableOpacity>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    marginTop: 8,
    marginBottom: 64,
  },

  list: {
    marginTop: 16,
    marginLeft: 8,
  },

  listItem: {
    color: colors.textSec,
    marginVertical: 8
  },  

  filterButton: {
    ...gs.button,
    paddingVertical: 16
  },
})
