/* eslint-disable prettier/prettier */

import React, {useRef} from 'react';
import {Animated, StyleSheet, TextProps} from 'react-native';

type LinkProps = TextProps & {
  children: string;
};

export function Link({children, ...rest}: LinkProps) {
  const animation = useRef(new Animated.Value(0)).current;

  const onMouseEnter = async () => {
    await Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 100,
    }).start();
  };

  const onMouseLeave = async () => {
    await Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 0,
      duration: 100,
    }).start();
  };

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#25DA67', '#1B5E20'],
  });

  return (
    <Animated.Text
      {...rest}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={[{color: backgroundColor}, styles.buttonText]}>
      {children}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
    textDecorationLine: 'underline',
  },
});
