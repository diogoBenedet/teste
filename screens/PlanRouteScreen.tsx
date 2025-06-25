import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function PlanRouteScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="orange" />
        <View style={styles.headerIcons}>
          <Ionicons name="home-outline" size={24} color="orange" style={styles.icon} />
          <FontAwesome5 name="bus" size={20} color="orange" style={styles.icon} />
          <Ionicons name="person-outline" size={24} color="orange" style={styles.icon} />
          <Ionicons name="notifications-outline" size={24} color="orange" style={styles.icon} />
        </View>
      </View>

      {/* Título */}
      <Text style={styles.title}>Acompanhar Ônibus</Text>

      {/* Mapa (imagem estática por enquanto) */}
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: 'https://i.ibb.co/ZVGfDn9/mapa-onibus.png' }} // substitua pela URL ou asset correto
          style={styles.mapImage}
          resizeMode="contain"
        />
      </View>

      {/* Previsões */}
      <Text style={styles.subTitle}>PREVISÕES</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Hora da chegada</Text>
        <Text style={styles.value}>00:00</Text>
        <Text style={styles.label}>Tempo estimado</Text>
        <Text style={styles.value}>20 min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff6600',
    marginVertical: 16,
  },
  mapContainer: {
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#000',
  },
});
