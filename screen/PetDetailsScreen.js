import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles/PetDetailStyles';

const PetDetailScreen = ({ route, navigation }) => {
  const { pet } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    navigation.setOptions({ title: pet.name });
  }, [pet, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.iconContainer}>
          <Text style={styles.petIcon}>
            {pet.species === 'Perro' ? '🐶' : pet.species === 'Gato' ? '🐱' : pet.species === 'Conejo' ? '🐰' : pet.species === 'Pájaro' ? '🐦' : '🐾'}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.petName}>{pet.name}</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Especie</Text>
            <Text style={styles.infoValue}>{pet.species}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Raza</Text>
            <Text style={styles.infoValue}>{pet.breed}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Edad</Text>
            <Text style={styles.infoValue}>{pet.age} años</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Peso</Text>
            <Text style={styles.infoValue}>{pet.weight} kg</Text>
          </View>

          <TouchableOpacity
            style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Text style={[styles.favoriteButtonText, isFavorite && styles.favoriteButtonTextActive]}>
              {isFavorite ? '❤️ Favorito' : '🤍 Marcar favorito'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PetDetailScreen;