// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function BuyPassScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Tela de Compra de Passe</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
//   text: { fontSize: 18 }
// });

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const transactions = [
  { id: 1, title: 'Saldo Adicionado', date: '30 de maio de 2024 - 17:15', value: 15.00, type: 'credit' },
  { id: 2, title: 'Ônibus 32', date: '30 de maio de 2024 - 17:15', value: 5.20, type: 'debit' },
  { id: 3, title: 'Saldo Adicionado', date: '30 de maio de 2024 - 17:15', value: 15.00, type: 'credit' },
  { id: 4, title: 'Ônibus 32', date: '30 de maio de 2024 - 17:15', value: 5.20, type: 'debit' },
  { id: 5, title: 'Saldo Adicionado', date: '30 de maio de 2024 - 17:15', value: 15.00, type: 'credit' },
  { id: 6, title: 'Ônibus 32', date: '30 de maio de 2024 - 17:15', value: 5.20, type: 'debit' },
];

export default function BuyPassScreen() {
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

      <Text style={styles.title}>Passe</Text>

      {/* Saldo atual */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo atual</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balance}>R$ 18,50</Text>
          <Ionicons name="eye-outline" size={20} color="#000" />
        </View>
      </View>

      {/* Botão Formas de Pagamento */}
      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentText}>Extrato detahado</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </TouchableOpacity>

      {/* Transações */}
      <ScrollView style={styles.transactionList}>
        {transactions.map(item => (
          <View key={item.id} style={styles.transactionItem}>
            <View style={styles.transactionInfo}>
              <MaterialIcons
                name={item.type === 'credit' ? 'attach-money' : 'directions-bus'}
                size={20}
                color="#007aff"
                style={{ marginRight: 8 }}
              />
              <View>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
            </View>
            <Text
              style={[
                styles.transactionValue,
                { color: item.type === 'credit' ? 'green' : 'red' }
              ]}
            >
              {item.type === 'credit' ? `R$ ${item.value.toFixed(2)}` : `- R$ ${item.value.toFixed(2)}`}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc66',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a85600',
    textAlign: 'center',
    marginVertical: 10,
  },
  balanceContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#333',
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  balance: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  paymentButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionList: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  transactionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  transactionDate: {
    fontSize: 12,
    color: '#666',
  },
  transactionValue: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

