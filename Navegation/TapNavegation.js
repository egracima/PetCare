import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PetListScreen from '../screen/PetListScreen';
import RegisterPetScreen from '../screen/RegisterPetScreen';

const Tab = createBottomTabNavigator();

const TapNavegation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mascotas" component={PetListScreen} />
      <Tab.Screen name="Registrar" component={RegisterPetScreen} />
    </Tab.Navigator>
  );
};

export default TapNavegation;