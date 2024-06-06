/* eslint-disable prettier/prettier */
import React, {ReactNode, useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

type TransitionProps = {
  children: ReactNode;
};

export function Transition({children}: TransitionProps) {
  const animation = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.spring(animation, {
      useNativeDriver: true,
      toValue: -30,
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
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 42,
  },
});
