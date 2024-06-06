/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

type CircularProgressProps = {
  size: number;
  strokeWidth: number;
  progress: number;
  color: string;
  backgroundColor: string;
};

export const CircularProgress = ({
  size,
  strokeWidth,
  progress,
  color,
  backgroundColor,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          transform: [
            {
              rotate: '90deg',
            },
          ],
        },
      ]}>
      <Svg width={size} height={size}>
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{`${progress}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
