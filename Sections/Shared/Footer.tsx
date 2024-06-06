/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function Footer() {
  return (
    <View style={styles.footer}>
      <View style={[styles.row, styles.gap3]}>
        <View style={styles.mineCircle} />
        <Text style={styles.heading}>Termos e serviços</Text>
      </View>
      <View style={[styles.row, styles.gap3]}>
        <View style={styles.mineCircle} />
        <Text style={styles.heading}>Contato</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    bottom: 30,
    position: 'absolute',
    flexDirection: 'row',
    gap: 14,
  },
  mineCircle: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: '#464646',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  gap7: {
    gap: 7,
  },
  gap3: {
    gap: 3,
  },
  form: {
    width: '90%',
    gap: 7,
  },
  column: {
    flexDirection: 'column',
  },
  amassadoLarge: {
    height: 30,
    width: 18,
    borderRadius: 15,
    backgroundColor: '#444444',
  },
  title: {
    fontSize: 32,
    color: '#444444',
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
  },
  heading: {
    color: '#444444',
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
    fontSize: 16,
  },
});
