import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

type Props = {
  customStyles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const Card = (props: Props) => {
  const { customStyles, children } = props;
  const { colors } = useTheme();

  return (
    <View
      style={[styles.container, customStyles, { backgroundColor: colors.card }]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
});

export default Card;
