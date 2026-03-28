import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles/PetListStyles';

const SPECIES_ICONS = {
  Perro: '🐶',
  Gato: '🐱',
  Conejo: '🐰',
  Pájaro: '🐦',
  Pez: '🐟',
  Hámster: '🐹',
};

const PetListScreen = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const samplePets = [
      { id: '1', name: 'Max', species: 'Perro', breed: 'Labrador', age: '3', weight: '28' },
      { id: '2', name: 'Luna', species: 'Gato', breed: 'Siamés', age: '2', weight: '4' },
      { id: '3', name: 'Rocky', species: 'Perro', breed: 'Bulldog', age: '5', weight: '22' },
      { id: '4', name: 'Nube', species: 'Conejo', breed: 'Holland Lop', age: '1', weight: '2' },
      { id: '5', name: 'Pío', species: 'Pájaro', breed: 'Canario', age: '1', weight: '0.03' },
    ];
    setPets(samplePets);
  }, []);

  const getIcon = (species) => SPECIES_ICONS[species] || '🐾';

  const renderPetCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PetDetail', { pet: item })}
    >
      <Text style={styles.cardIcon}>{getIcon(item.species)}</Text>
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardSpecies}>{item.species}</Text>
      </View>
      <Text style={styles.cardArrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Mis Mascotas</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetCard}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>No hay mascotas registradas</Text>}
      />
    </SafeAreaView>
  );
};

export default PetListScreen;