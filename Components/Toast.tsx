/* eslint-disable prettier/prettier */

import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

export function Toast() {
  const animation = useRef(new Animated.Value(-30)).current;

  useEffect(() => {
    Animated.spring(animation, {
      useNativeDriver: false,
      toValue: 0,
    }).start();
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateX: animation,
            },
          ],
        },
      ]}>
      <Text style={styles.text}>Cliente não encontrado!</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 80,
    top: 80,
    borderRadius: 42,
    padding: 18,
    backgroundColor: '#ffffff',
    zIndex: 9999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 14,
    color: '#333333',
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
    maxWidth: 400,
  },
  text: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
  },
});
