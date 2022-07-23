import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

type Props = {
  customStyles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const CustomText = (props: Props) => {
  const { customStyles, children } = props;
  const { colors } = useTheme();

  return <Text style={[customStyles, { color: colors.text }]}>{children}</Text>;
};

const styles = StyleSheet.create({});

export default CustomText;
