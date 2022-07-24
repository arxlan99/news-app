import { MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import BusinessScreen from '../screens/NewsScreen/BusinessScreen';
import EconomyScreen from '../screens/NewsScreen/EconomyScreen';
import TechnologyScreen from '../screens/NewsScreen/TechnologyScreen';
import WorldScreen from '../screens/NewsScreen/WorldScreen';
import { RootDrawerList } from '../types';

const Drawer = createDrawerNavigator<RootDrawerList>();

function DrawerNavigator() {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="BusinessScreen"
        component={BusinessScreen}
        options={{
          title: `${t('business')}`,
          drawerIcon: ({ color }) => (
            <MaterialIcons name="business" size={24} color={color} />
          ),
          drawerLabelStyle: {
            fontSize: 16,
          },
          drawerType: 'front',
        }}
      />
      <Drawer.Screen
        name="WorldScreen"
        component={WorldScreen}
        options={{
          title: `${t('world')}`,
          drawerIcon: ({ color }) => (
            <MaterialIcons name="public" size={24} color={color} />
          ),
          drawerLabelStyle: {
            fontSize: 16,
          },
          drawerType: 'front',
        }}
      />
      <Drawer.Screen
        name="EconomyScreen"
        component={EconomyScreen}
        options={{
          title: `${t('economy')}`,
          drawerIcon: ({ color }) => (
            <MaterialIcons name="attach-money" size={24} color={color} />
          ),
          drawerLabelStyle: {
            fontSize: 16,
          },
          drawerType: 'front',
        }}
      />
      <Drawer.Screen
        name="TechnologyScreen"
        component={TechnologyScreen}
        options={{
          title: `${t('technology')}`,
          drawerIcon: ({ color }) => (
            <MaterialIcons name="computer" size={24} color={color} />
          ),
          drawerLabelStyle: {
            fontSize: 16,
          },
          drawerType: 'front',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
