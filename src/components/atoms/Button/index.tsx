import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    borderRadius: 8,
  }),
  label: textColor => ({
    color: textColor,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
  }),
});
