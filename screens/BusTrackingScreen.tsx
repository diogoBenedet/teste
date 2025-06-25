import React from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import { Entypo, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BusTracking'>;

export default function BuyTicketScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={24} color="#FF6600" />
        </TouchableOpacity>
        <Feather name="home" size={24} color="#FF6600" />
        <Text style={styles.logo}>BuszApp</Text>
        <Feather name="user" size={24} color="#FF6600" />
        <Feather name="bell" size={24} color="#FF6600" />
      </View>

      <Text style={styles.title}>Comprar bilhete</Text>

      <View style={styles.row}>
        <MaterialCommunityIcons name="calendar-month-outline" size={20} color="#FF6600" />
        <Text>30/02/2024 - 17:00</Text>
      </View>

      <Text style={styles.total}>Valor total:</Text>
      <Text style={styles.price}>R$ 15,00</Text>

      <Text style={styles.sectionTitle}>Informações de pagamento</Text>

      <View style={styles.paymentMethods}>
        <TouchableOpacity style={styles.method}><Text>Pix</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.method, styles.activeMethod]}><Text>Cartão</Text></TouchableOpacity>
        <TouchableOpacity style={styles.method}><Text>Boleto</Text></TouchableOpacity>
      </View>

      <View style={styles.cardRow}>
        <FontAwesome name="cc-visa" size={30} color="#1A1F71" />
        <FontAwesome name="cc-mastercard" size={30} color="#FF5F00" />
      </View>

      <TextInput style={styles.input} value="Ariberto Fenômeno" placeholder="Nome Completo" />
      <TextInput style={styles.input} value="1234 1234 1234 1234" placeholder="Número do Cartão" keyboardType="numeric" />
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="CVC" keyboardType="numeric" />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="MM / YY" />
      </View>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pagar R$ 15,00</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  logo: { fontSize: 18, fontWeight: 'bold', color: '#FF6600' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
  total: { fontSize: 16, color: '#444', marginTop: 8 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  method: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5
  },
  activeMethod: {
    backgroundColor: '#FFA500',
    borderColor: '#FFA500'
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  },
  halfInput: {
    flex: 1,
    marginRight: 8
  },
  payButton: {
    backgroundColor: '#FFA500',
    padding: 16,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20
  },
  payButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  }
});
