/* eslint-disable prettier/prettier */

import React, {useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

type ButtonProps = {
  loading?: boolean;
};

export function Button({loading = false}: ButtonProps) {
  const animation = useRef(new Animated.Value(0)).current;

  const onMouseEnter = async () => {
    await Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 100,
    }).start();
  };

  const onMouseLeave = async () => {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 0,
      duration: 100,
    }).start();
  };

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['#25DA67', '#23BA5A', '#059844'],
  });

  const onPressIn = () => {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 2,
      duration: 200,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 100,
    }).start();
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={[styles.button, {backgroundColor}]}>
        {!loading ? (
          <Text style={styles.buttonText}>criar conta</Text>
        ) : (
          <ActivityIndicator size={22} color={'#333333'} />
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 32,
    height: 48,
    backgroundColor: '#25DA67',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#333333',
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
  },
});
