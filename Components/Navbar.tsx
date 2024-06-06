/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {FONTS} from '../src/theme/fonts';
import {
  Gauge,
  House,
  MonitorPlay,
  Playlist,
  SquaresFour,
} from 'phosphor-react-native';

export function Navbar() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/Logo-large.png')}
      />
      <View style={[styles.content, styles.gap12]}>
        <View style={[styles.row, styles.gap12]}>
          <House size={24} color="#ffffff" weight="fill" />
          <Text style={styles.text}>Dashboard</Text>
        </View>
        <View style={[styles.row, styles.gap12]}>
          <MonitorPlay size={24} color="#ffffff" weight="fill" />
          <Text style={styles.text}>Lessons</Text>
        </View>
        <View style={[styles.row, styles.gap12]}>
          <SquaresFour size={24} color="#ffffff" weight="fill" />
          <Text style={styles.text}>Rooms</Text>
        </View>
        <View style={[styles.row, styles.gap12]}>
          <Playlist size={24} color="#ffffff" weight="fill" />
          <Text style={styles.text}>Playlist</Text>
        </View>
        <View style={[styles.row, styles.gap12]}>
          <Gauge size={24} color="#ffffff" weight="fill" />
          <Text style={styles.text}>Dashboard</Text>
        </View>
      </View>
      <Image
        resizeMode="contain"
        style={[styles.ilustration, styles.left]}
        source={require('../assets/Iustration.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 300,
    flex: 1,
    backgroundColor: '#000000',
    padding: 21,
    // alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 60,
  },
  content: {
    marginTop: 51,
    paddingHorizontal: 21,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.RobotoMedium,
    fontSize: 16,
  },
  gap12: {
    gap: 12,
  },
  ilustration: {
    width: 200,
    height: 145,
  },
  left: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});
