import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 24,
    marginVertical: 38,
  },
});
