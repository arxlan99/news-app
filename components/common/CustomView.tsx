import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

type Props = {
  customStyles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const CustomView = (props: Props) => {
  const { customStyles, children } = props;
  const { colors } = useTheme();

  return (
    <View style={[customStyles, { backgroundColor: colors.background }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomView;
