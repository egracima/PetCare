import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PetListScreen from '../screen/PetListScreen';
import RegisterPetScreen from '../screen/RegisterPetScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TipsScreen from '../screen/TipsScreen';

const Tab = createBottomTabNavigator();

const TapNavegation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000', 
        tabBarInactiveTintColor: '#555', 
        tabBarStyle: { height: 60, paddingBottom: 10 }, 
        headerStyle: { backgroundColor: '#000' }, 
        headerTintColor: '#fff', 
      }}
    >
      <Tab.Screen
        name="Pets"
        component={PetListScreen}
        options={{
          title: 'Mis mascotas',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="pets" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterPetScreen}
        options={{
          title: 'Registrar',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-circle-outline" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TipsScreen}
        options={{
          title: 'Consejos',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="lightbulb-outline" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TapNavegation;