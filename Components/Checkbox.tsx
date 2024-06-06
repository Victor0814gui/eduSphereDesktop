/* eslint-disable prettier/prettier */

import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';

export function Checkbox() {
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
    <Pressable
      // style={styles.container}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={[styles.circle, {borderColor: backgroundColor}]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    height: 20,
    width: 20,
  },
  circle: {
    borderWidth: 4,
    height: 20,
    width: 20,
    borderRadius: 14,
  },
});
