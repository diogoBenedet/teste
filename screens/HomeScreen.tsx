import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons, Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';



type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Entypo name="chevron-left" size={24} color="#FF6600" />
        <Feather name="map-pin" size={24} color="#FF6600" />
        <Text style={styles.logo}>BuszApp</Text>
        <Feather name="user" size={24} color="#FF6600" />
        <Feather name="bell" size={24} color="#FF6600" />
      </View>

      <Text style={styles.title}>Para onde você deseja ir hoje?</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar linha ou destino"
        placeholderTextColor="#666"
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BusTracking')}>
        <MaterialIcons name="directions-bus" size={24} color="black" />
        <Text style={styles.buttonText}>Comprar Bilhete</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BuyPass')}>
        <FontAwesome name="credit-card" size={22} color="black" />
        <Text style={styles.buttonText}>Acompanhar Saldo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlanRoute')}>
        <Entypo name="map" size={22} color="black" />
        <Text style={styles.buttonText}>Planejar Rota</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Ir para Perfil</Text>
      </TouchableOpacity>

      <Text style={styles.subTitle}>Linhas recentes</Text>
      <Text style={styles.historyItem}>Unochapeco - EFAPI</Text>
      <Text style={styles.historyItem}>Shopping Pátio Chapecó - Av. Fernando Machado</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  logo: { fontSize: 18, fontWeight: 'bold', color: '#FF6600' },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  searchInput: {
    backgroundColor: '#FFEFD5',
    padding: 12,
    borderRadius: 20,
    marginBottom: 20
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    gap: 10,
    marginBottom: 15
  },
  buttonText: { fontSize: 16, fontWeight: '500' },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6600',
    marginTop: 10,
    marginBottom: 6
  },
  historyItem: { fontSize: 14, marginBottom: 4 },
  profileButton: {
    backgroundColor: '#f15a24',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
});

