/* eslint-disable prettier/prettier */
import React, {createContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
// import {Toast} from './Components/Toast';
import {SignInSection} from '../../Sections/SignInSection';
import {WelcomeSection} from '../../Sections/WelcomeSection';
import {SignUpSection} from '../../Sections/SignUpSection';

type state = 'signin' | 'signup';

type SelectSessionScreenProps = {
  page: state;
  setPage: (state: state) => void;
};

export const SelectSessionScreen = createContext(
  {} as SelectSessionScreenProps,
);

export function SessionScreen() {
  const [page, setPage] = useState<state>('signin');
  return (
    <View style={styles.container}>
      {/* <Toast /> */}
      <WelcomeSection />
      <SelectSessionScreen.Provider
        value={{
          page,
          setPage,
        }}>
        {page === 'signin' ? <SignInSection /> : <SignUpSection />}
      </SelectSessionScreen.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'row',
  },
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
