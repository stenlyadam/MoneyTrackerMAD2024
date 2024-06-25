import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" />
      <View style={styles.contentContainer}>
        <Gap height={24} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    paddingHorizontal: 24,
  },
});
