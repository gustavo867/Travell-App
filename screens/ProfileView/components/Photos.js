import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { gs, colors } from '../../../styles'

const photos = [
    require('../../../assets/travell1.jpg'),
    require('../../../assets/travell2.jpg'),
    require('../../../assets/travell3.jpg'),
    require('../../../assets/travell4.jpg'),
    require('../../../assets/travell5.jpg'),
    require('../../../assets/travell6.jpg'),
    require('../../../assets/travell7.jpg'),
    require('../../../assets/travell8.jpg'),
]

export default function Photos() {
  return (
    <View style={[gs.sectionContainer, { marginTop: 8 }]}>
      <Text style={gs.sectionTitle}>My Photos</Text>

      <View style={styles.photosContainer}>
          {photos.map((photo, index) => {
              return (
                  <Image source={photo} key={index} style={[
                      styles.photo, 
                      {
                          marginRight: 6
                      } 
                    ]}/>
              )
          })}
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
    photosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
    },

    photo: {
        width: 103,
        height: 108,
        marginBottom: 12,
        borderRadius: 8,
    },
})
