import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BusinessScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>BusinessScreen</Text>
    </View>
  );
};

export default BusinessScreen;
