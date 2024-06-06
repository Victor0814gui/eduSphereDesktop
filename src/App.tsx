/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {titleBar} from 'react-native-custom-window';
// import {Toast} from './Components/Toast';
import {Wrapper} from './routes/Wrapper';

export function App() {
  useEffect(() => {
    const handleChangeWindowStyle = async () => {
      await titleBar.enableExtend();

      await titleBar.TitlebarColor({
        backgroundColor: '#ffffff',
        foregroundColor: '#ffffff',
        buttonBackgroundColor: 'transparent',
        buttonForegroundColor: '#000000',
        buttonHoverBackgroundColor: '#25DA67',
      });
    };

    handleChangeWindowStyle();
  }, []);

  return <Wrapper />;
}
