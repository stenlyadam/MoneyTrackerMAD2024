import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const Header = ({title, backButton, onPress}) => {
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
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
