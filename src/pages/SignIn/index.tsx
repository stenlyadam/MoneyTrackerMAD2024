import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput} from '../../components/molecules';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const onSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('HomeScreen', {uid: user.uid});
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.pageContainer}>
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          onChangeText={value => setEmail(value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Gap height={24} />
        <Button label="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
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
    paddingHorizontal: 24,
  },
});
