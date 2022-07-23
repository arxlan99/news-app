/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ContactsScreen from '../screens/ContactsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatsScreen';
import {
  RootDrawerList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from '../context/ColorContext';
import { getData } from '../utils/local-storage';
import { useTranslation } from 'react-i18next';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BusinessScreen from '../screens/NewsScreen/BusinessScreen';
import WorldScreen from '../screens/NewsScreen/WorldScreen';

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

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/*       <Stack.Screen
        name="DrawRoot"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
 */}
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

const Drawer = createDrawerNavigator<RootDrawerList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BusinessScreen" component={BusinessScreen} />
      <Drawer.Screen name="WorldScreen" component={WorldScreen} />
    </Drawer.Navigator>
  );
}
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { t } = useTranslation();
  const currentColor = React.useContext(ThemeContext);
  const colorScheme = currentColor.theme;

  return (
    <BottomTab.Navigator
      initialRouteName="ContactsScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="ContactsScreen"
        component={DrawerNavigator}
        options={{
          title: `${t('contacts')}`,
          headerShown: false,
        }}
      />
      {/*    <BottomTab.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          title: `${t('contacts')}`,
          headerShown: true,
        }}
      /> */}
      <BottomTab.Screen
        name="ChatScreen"
        component={SearchScreen}
        options={{
          title: `${t('tabTwo')}`,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: `${t('settings')}`,
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

function SearchScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Test"
        component={ChatScreen}
        options={{
          headerSearchBarOptions: {
            placeholder: 'Search',
          },
        }}
      />
    </Stack.Navigator>
  );
}
