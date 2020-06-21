import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { gs, colors } from '../../../styles'

export default function Address() {
  return (
    <View>
      <View style={{ backgroundColor: '#000' }}>
        <Image source={require('../../../assets/map.jpg')} style={{ height: 200, opacity: 0.2 }}/>
      </View>

      <View style={styles.addressContainer}>
        <Image source={require('../../../assets/pin.png')} style={{ width: 30, height: 30, marginTop: 18,}}/>
        <View style={{ marginLeft: 8, marginTop: 20 }}>
          <Text style={gs.sectionTitle}>Address</Text>
          <Text style={styles.address}>{`Maldives Rangali Island, Maldives\n 200, Maldives`}</Text>

          <View style={{ marginTop: 16 }}>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={gs.smallText}>Check it</Text>
              <Entypo 
              name="chevron-right" 
              size={12} color="#fff" 
              style={{ marginLeft: 4, marginTop: 2, }}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
  addressContainer: {
    ...gs.absoluteFull,
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },

  address: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 28,
  },

  checkButton: {
    ...gs.button,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
})

