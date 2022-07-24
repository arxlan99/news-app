import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { default as Search } from '../screens/SearchScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { ThemeContext } from '../context/ColorContext';
import { getData } from '../utils/local-storage';
import BottomTabNavigator from './BottomTabNavigator';
import { useTranslation } from 'react-i18next';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import { SearchContext } from '../context/SearchContext';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const MyDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      card: '#171717',
    },
  };

  const currentColor = React.useContext(ThemeContext);

  React.useEffect(() => {
    getData('@theme_color').then((value) => {
      if (value) {
        currentColor.setTheme(value as 'light' | 'dark');
      } else {
        currentColor.setTheme(colorScheme || 'light');
      }
    });
  }, [colorScheme]);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={currentColor.theme === 'dark' ? MyDarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

export const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewsDetailScreen"
        component={NewsDetailScreen}
        options={{ title: `${t('newsDetail')}`, headerShown: true }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!', headerShown: true }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export function SearchScreen() {
  const { t } = useTranslation();
  const { setFilteredTitle } = React.useContext(SearchContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: `${t('search')}`,

          headerSearchBarOptions: {
            placeholder: `${t('search')}`,
            onChangeText: (event) => {
              setFilteredTitle(event.nativeEvent.text.toLowerCase());
            },
          },
        }}
      />
    </Stack.Navigator>
  );
}
