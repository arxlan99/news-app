import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Card from '../components/card/Card';
import { useTranslation } from 'react-i18next';
import SearchComponent from '../components/search-input/SearchInput';
import CustomView from '../components/common/CustomView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const navigation = useNavigation();

  /*   useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        headerShown: true,
        headerTitle: 'Tab Two',
        headerSearchBarOptions: { placeholder: 'Search me' },
      });
    }, [])
  ); */

  return (
    <SafeAreaView>
      {/* <Card customStyles={styles.container}></Card> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
