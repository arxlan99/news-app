import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useCallback, useContext, useEffect, useState } from 'react';
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { ThemeContext } from '../context/ColorContext';

import { Text, View } from '../components/Themed';
import Card from '../components/card/Card';
import { removeData, storeData } from '../utils/local-storage';
import { useTranslation } from 'react-i18next';
import CustomView from '../components/common/CustomView';
import HorizontalLine from '../components/common/HorizontalLine';
import CustomText from '../components/common/CustomText';
import CustomCardView from '../components/common/CustomCardView';

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();

  const [color, setColor] = useState();

  const navigation = useNavigation();
  const colorCtx = useContext(ThemeContext);
  const colorScheme = useColorScheme();

  /*   useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        headerShown: false,
      });
    }, [])
  ); */

  const handleChangeColor = async (option: string) => {
    if (option === 'light') {
      colorCtx.setTheme('light');
      storeData('@theme_color', 'light');
    } else if (option === 'dark') {
      colorCtx.setTheme('dark');
      storeData('@theme_color', 'dark');
    } else {
      await removeData('@theme_color');
      colorCtx.setTheme(colorScheme || 'light');
    }
  };

  const handleChangeLanguage = async (option: string) => {
    if (option === 'en') {
      i18n.changeLanguage('en');
      storeData('@language', 'en');
    } else if (option === 'tr') {
      i18n.changeLanguage('tr');
      storeData('@language', 'tr');
    }
  };

  return (
    <CustomView customStyles={{ flex: 1 }}>
      <CustomView customStyles={styles.cardContainer}>
        <CustomText
          customStyles={{
            marginBottom: 5,
          }}
        >
          {t('theme')}
        </CustomText>
        <Card customStyles={styles.container}>
          <CustomCardView
            customStyles={{
              marginBottom: 5,
            }}
          >
            <Button
              title={t('darkTheme')}
              onPress={() => handleChangeColor('dark')}
            />
          </CustomCardView>
          <HorizontalLine />

          <CustomCardView
            customStyles={{
              marginVertical: 5,
            }}
          >
            <Button
              title={t('lightTheme')}
              onPress={() => handleChangeColor('light')}
            />
          </CustomCardView>

          <HorizontalLine />
          <CustomCardView
            customStyles={{
              marginTop: 5,
            }}
          >
            <Button
              title={t('systemTheme')}
              onPress={() => handleChangeColor('remove')}
            />
          </CustomCardView>
        </Card>
      </CustomView>

      <CustomView customStyles={styles.cardContainer}>
        <CustomText
          customStyles={{
            marginBottom: 5,
          }}
        >
          {t('langugage')}
        </CustomText>
        <Card customStyles={styles.container}>
          <CustomCardView
            customStyles={{
              marginBottom: 5,
            }}
          >
            <Button
              title={t('english')}
              onPress={() => handleChangeLanguage('en')}
            />
          </CustomCardView>

          <HorizontalLine />

          <CustomCardView
            customStyles={{
              marginTop: 5,
            }}
          >
            <Button
              title={t('turkish')}
              onPress={() => handleChangeLanguage('tr')}
            />
          </CustomCardView>
        </Card>
      </CustomView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    marginTop: 30,
    marginHorizontal: 20,
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
