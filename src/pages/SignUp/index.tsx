import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {NullPhoto} from '../../assets/icons';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const data = {
      fullName: fullName,
      email: email,
      password: password,
    };
    // console.log(data);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        showMessage({
          message: 'Registrasi berhasil',
          type: 'success',
        });
        navigation.navigate('SignIn');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <Header
        title="Sign Up"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileWrapper}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image source={NullPhoto} style={styles.avatar} />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={24} />
        <TextInput
          label="Full Name"
          placeholder="Type your full name"
          onChangeText={value => setFullName(value)}
        />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          onChangeText={value => setEmail(value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
        <Gap height={24} />
        <Button label="Continue" onPress={onSubmit} />
      </View>
    </ScrollView>
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
  profileContainer: {
    alignItems: 'center',
    marginTop: 29,
  },
  profileWrapper: {
    height: 110,
    width: 110,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
  },
});
