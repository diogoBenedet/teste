import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BusTrackingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Acompanhamento de Ônibus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18 }
});

// aaaaa