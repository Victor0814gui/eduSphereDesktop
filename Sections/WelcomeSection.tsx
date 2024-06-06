/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export function WelcomeSection() {
  return (
    <View style={styles.welcomeSection}>
      <Image
        resizeMode="contain"
        style={[styles.ilustration, styles.left]}
        source={require('../assets/Iustration.png')}
      />
      <Image
        resizeMode="contain"
        style={[styles.ilustration, styles.right]}
        source={require('../assets/Iustration.png')}
      />
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/Logo-large.png')}
      />
      <Text style={styles.description}>
        EduSphere é um software de aulas com chat em tepo real com mecanismos de
        exibição de video e controles personalizados 100% nativos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeSection: {
    flex: 1.5,
    justifyContent: 'center',
    padding: 32,
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
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  logo: {
    width: '80%',
    height: '16%',
  },
  description: {
    fontSize: 22,
    color: '#81E38B',
    fontWeight: '500',
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
  },
  signinSection: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
