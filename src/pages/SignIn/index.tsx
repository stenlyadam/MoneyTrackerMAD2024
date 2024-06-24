import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../components/atoms';
import {Header, TextInput} from '../../components/molecules';

const SignIn = () => {
  return (
    <View>
      <Header title="Sign In" />
      <TextInput />
      <TextInput />
      <Button />
      <Button />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
