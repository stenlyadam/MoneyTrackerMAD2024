import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../../assets/icons';

const Header = ({title, backButton}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <TouchableOpacity activeOpacity={0.5} style={styles.buttonBack}>
          <ArrowBack />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 34,
    marginVertical: 38,
  },
  buttonBack: {
    height: 35,
    width: 35,
  },
});
