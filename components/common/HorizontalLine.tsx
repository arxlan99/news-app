import { View, Text } from 'react-native';
import React from 'react';
import { ThemeContext } from '../../context/ColorContext';

const HorizontalLine = () => {
  const themeCtx = React.useContext(ThemeContext);
  const color = themeCtx.theme === 'light' ? '#d1d5db' : '#374151';

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 1, height: 1, backgroundColor: color }} />
      <View style={{ flex: 1, height: 1, backgroundColor: color }} />
    </View>
  );
};

export default HorizontalLine;
