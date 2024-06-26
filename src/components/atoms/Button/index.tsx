import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../../assets/icons';

const Button = ({
  label,
  color = '#02CF8E',
  textColor = '#020202',
  onPress,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <ArrowBack />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    paddingVertical: 12,
    borderRadius: 8,
  }),
  label: textColor => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
    textAlign: 'center',
  }),
});
