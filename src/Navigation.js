import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard'
  },
  Pay: {
    lib: AntDesign,
    name: 'home'
  }, 
  Notications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  }
};

const Navigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor:'#92929c'
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = icons.Home;
            return <Icon name={name} size={size} color={color} />
          }
        }}
      />

      <Tab.Screen 
        name="Wallet" 
        component={WalletScreen}
        options={{
          title: 'Carteira',
          tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = icons.Wallet;
            return <Icon name={name} size={size} color={color} />
          }
        }}
      />

      <Tab.Screen 
        name="Pay" 
        component={PayScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <PayButton 
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );   
          }
        }}
      />

      <Tab.Screen 
        name="Notifications" 
        component={PayScreen}
        options={{
          title: 'Notificação',
          tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = icons.Notications;
            return <Icon name={name} size={size} color={color} />
          }
        }}
      />

      <Tab.Screen 
        name="Settings" 
        component={PayScreen}
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = icons.Settings;
            return <Icon name={name} size={size} color={color} />
          }
        }}
      />  
    </Tab.Navigator>
  );
}

export default Navigation;