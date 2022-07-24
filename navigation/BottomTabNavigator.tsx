import { Feather, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SearchScreen } from './index';
import Colors from '../constants/Colors';
import { ThemeContext } from '../context/ColorContext';
import SettingsScreen from '../screens/SettingsScreen';
import { RootTabParamList } from '../types';
import DrawerNavigator from './DrawerNavigator';
import { AntDesign } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { t } = useTranslation();
  const currentColor = React.useContext(ThemeContext);
  const colorScheme = currentColor.theme;

  return (
    <BottomTab.Navigator
      initialRouteName="NewsGeneralScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="NewsGeneralScreen"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          title: `${t('news')}`,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="newspaper-o" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: `${t('search')}`,
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
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

export default BottomTabNavigator;
