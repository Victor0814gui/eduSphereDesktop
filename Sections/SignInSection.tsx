/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from '../Components/Input';
import {Button} from '../Components/Button';
import {Link} from '../Components/Link';
import {Transition} from './Shared/Transition';
import {Footer} from './Shared/Footer';
import {SelectSessionScreen} from '../src/screens/SessionScreen';

export function SignInSection() {
  const {setPage} = useContext(SelectSessionScreen);

  const handleSelectPage = () => {
    setPage('signup');
  };
  return (
    <Transition>
      <View style={styles.form}>
        <View style={[styles.row, styles.gap7]}>
          <View style={styles.amassadoLarge} />
          <Text style={styles.title}>Logar na conta</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.heading}>Email</Text>
          <Input placeholder="ex: seuemail@gmail.com" />
        </View>
        <View style={styles.column}>
          <Text style={styles.heading}>Password</Text>
          <Input placeholder="*******" secureTextEntry />
        </View>
        <View style={[styles.row, styles.gap7]}>
          <Text style={styles.heading}>
            Esqueceu a senha? redefina <Link>aqui</Link>
          </Text>
        </View>
        <Button />
        <View style={styles.separator}>
          <View style={styles.line} />
          <View style={styles.amassado} />
          <View style={styles.line} />
        </View>
        <Text style={styles.heading}>
          Já tem uma conta? entre, <Link onPress={handleSelectPage}>aqui</Link>
        </Text>
      </View>
      <Footer />
    </Transition>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  gap7: {
    gap: 7,
  },
  gap3: {
    gap: 3,
  },
  form: {
    width: '90%',
    gap: 7,
  },
  column: {
    flexDirection: 'column',
  },
  amassadoLarge: {
    height: 30,
    width: 18,
    borderRadius: 15,
    backgroundColor: '#444444',
  },
  title: {
    fontSize: 32,
    color: '#444444',
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
  },
  heading: {
    color: '#444444',
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
    fontSize: 16,
  },
  circle: {
    borderWidth: 4,
    height: 20,
    width: 20,
    borderRadius: 14,
    borderColor: '#25DA67',
  },
  link: {
    fontFamily: 'Assets/Fonts/Poppins-Medium.ttf#Poppins',
    color: '#25DA67',
  },
  separator: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    marginVertical: 12,
    justifyContent: 'center',
  },
  line: {
    backgroundColor: '#464646',
    height: 2,
    borderRadius: 1,
    width: '42%',
  },
  amassado: {
    height: 20,
    width: 10,
    borderRadius: 15,
    backgroundColor: '#464646',
  },
});
