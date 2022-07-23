import {
  useNavigation,
  useFocusEffect,
  useTheme,
  DrawerActions,
} from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/card/Card';

import { Text, View } from '../components/Themed';

export default function ContactsScreen() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const navigation = useNavigation();

  /*   useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        headerShown: false,
        headerTitle: `${t('discover')}`,
        headerSearchBarOptions: { placeholder: 'Search Message' },
      });
    }, [])
  ); */

  return (
    <SafeAreaView style={styles.container}>
      <Card />
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 80,
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
