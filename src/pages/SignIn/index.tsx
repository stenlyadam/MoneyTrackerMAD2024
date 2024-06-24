import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../components/atoms';
import {Header, TextInput} from '../../components/molecules';

const SignIn = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <TextInput label="Password" placeholder="Type your password" />
        <Button />
        <Button />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
  },
});
