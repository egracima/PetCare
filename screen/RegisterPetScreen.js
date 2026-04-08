import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';

import styles from '../styles/RegisterPetStyles';

const RegisterPetScreen = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('holi uwu');
    }, 5000);

    return;
  }, []); 
  
  useEffect(() => {
    const valid = name.trim() !== '' &&
      species.trim() !== '' &&
      breed.trim() !== '' &&
      age.trim() !== '' &&
      weight.trim() !== '';
    setIsFormValid(valid);
  }, [name, species, breed, age, weight]);

  const handleRegister = () => {
    Alert.alert(
      'Mascota registrada',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age} años\nPeso: ${weight} kg`,
      [{ text: 'OK' }]
    );
  };

  const handleClear = () => {
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Registrar nueva mascota</Text>

          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Max"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Especie</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Perro"
            value={species}
            onChangeText={setSpecies}
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Raza</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Labrador"
            value={breed}
            onChangeText={setBreed}
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Edad (años)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 3"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          />

          <Text style={styles.label}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: 28"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
            placeholderTextColor="#aaa"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.registerButton, !isFormValid && styles.registerButtonDisabled]}
              onPress={handleRegister}
              disabled={!isFormValid}
            >
              <Text style={styles.registerButtonText}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
              <Text style={styles.clearButtonText}>Limpiar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPetScreen;
