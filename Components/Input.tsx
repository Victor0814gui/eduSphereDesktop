/* eslint-disable prettier/prettier */
import React, {useRef} from 'react';
import {Animated, StyleSheet, TextInput, TextInputProps} from 'react-native';

export function Input({...rest}: TextInputProps) {
  const animation = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<TextInput>(null);

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
    outputRange: ['#8C8C8C', '#25DA67'],
  });

  return (
    <Animated.View
      style={[styles.inputWrapper, {borderColor: backgroundColor}]}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <TextInput
        {...rest}
        ref={inputRef}
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
        verticalAlign="middle"
        textAlignVertical="center"
        textAlign="center"
        placeholderTextColor={'#8C8C8C'}
        style={[styles.input]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    borderWidth: 1.4,
    borderRadius: 32,
    height: 48,
    borderColor: '#8C8C8C',
    backgroundColor: 'transparent',
    width: '100%',
    zIndex: 1,
  },
  input: {
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
    color: '#8C8C8C',
    flex: 1,
    zIndex: 1234,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  inputHovered: {
    borderColor: '#25DA67',
  },
});
