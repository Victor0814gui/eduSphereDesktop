/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Footer} from './Shared/Footer';
import {Link} from '../Components/Link';
import {Input} from '../Components/Input';
import {Button} from '../Components/Button';
import {Transition} from './Shared/Transition';
import {Checkbox} from '../Components/Checkbox';

import {SelectSessionScreen} from '../src/screens/SessionScreen';

export function SignUpSection() {
  const {setPage} = useContext(SelectSessionScreen);

  const handleSelectPage = () => {
    setPage('signin');
  };
  return (
    <Transition>
      <View style={styles.form}>
        <View style={[styles.row, styles.gap7]}>
          <View style={styles.amassadoLarge} />
          <Text style={styles.title}>Criar conta</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.heading}>Name</Text>
          <Input placeholder="ex: Fulano dos Santos" />
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
          <Checkbox />
          <Text style={styles.heading}>
            temos de uso, <Link>aqui</Link>
          </Text>
        </View>
        <View style={[styles.row, styles.gap7]}>
          <Checkbox />
          <Text style={styles.heading}>
            politica de privacidade, <Link>aqui</Link>
          </Text>
        </View>
        <Button loading />
        <View style={styles.separator}>
          <View style={styles.line} />
          <View style={styles.amassado} />
          <View style={styles.line} />
        </View>
        <Text style={styles.heading}>
          Ainda não tem uma conta? crie{' '}
          <Link onPress={handleSelectPage}>aqui</Link>
        </Text>
      </View>
      <Footer />
    </Transition>
  );
}

const styles = StyleSheet.create({
  signupSection: {
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
    width: '100%',
    maxWidth: 400,
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
