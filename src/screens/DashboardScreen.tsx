/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import {Toast} from './Components/Toast';

import Video from 'react-native-video';
import {Navbar} from '../../Components/Navbar';
import {FONTS} from '../theme/fonts';

export function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Video
          // Can be a URL or a local file.
          source={require('./videoplayback.mp4')}
          paused={true}
          onError={e => {
            setError(e.toString());
          }}
          controls={true}
          style={styles.video}
        />
        <Text style={styles.title}>Novas features com kotlin</Text>
        <Text style={styles.text}>
          Novas features com kotlinNovas features com kotlinNovas features com
          kotlinNovas features com kotlinNovas features com kotlinNovas features
          com kotlinNovas features com kotlinNovas features com kotlinNovas
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 21,
  },
  video: {
    height: 260,
    width: 780,
    // borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.RobotoMedium,
    color: '#000000',
  },
  text: {
    fontSize: 14,
    fontFamily: FONTS.RobotoMedium,
    color: '#333333',
  },
});
