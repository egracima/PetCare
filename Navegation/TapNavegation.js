import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PetListScreen from '../screen/PetListScreen';
import PetDetailScreen from '../screen/PetDetailsScreen';
import RegisterPetScreen from '../screen/RegisterPetScreen';
import TipsScreen from '../screen/TipsScreen';
import { tabNavigatorOptions, stackNavigatorOptions } from '../styles/TapNavegationStyles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PetsStack = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen
        name="PetList"
        component={PetListScreen}
        options={{ title: 'Mis Mascotas' }}
      />
      <Stack.Screen
        name="PetDetail"
        component={PetDetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
};

const TapNavegation = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigatorOptions}>
      <Tab.Screen
        name="Pets"
        component={PetsStack}
        options={{
          title: 'Mascotas',
          headerShown: false,
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
        name="Tips"
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
