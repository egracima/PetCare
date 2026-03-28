import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import CARE_TIPS from '../data/tipsData';
import styles from '../styles/TipsStyles';

const TipsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tips] = useState(CARE_TIPS);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [tips.length]);

  useEffect(() => {
    setStatusMessage(`Mostrando consejo ${currentIndex + 1} de ${tips.length}`);
  }, [currentIndex, tips.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tips.length);
  };

  const currentTip = tips[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.tipCard}>
          <Text style={styles.tipIcon}>{currentTip.icon}</Text>
          <Text style={styles.tipTitle}>{currentTip.title}</Text>
          <Text style={styles.tipDescription}>{currentTip.description}</Text>
        </View>

        <Text style={styles.indicator}>
          {currentIndex + 1} de {tips.length}
        </Text>

        <Text style={styles.statusMessage}>{statusMessage}</Text>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Siguiente consejo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TipsScreen;