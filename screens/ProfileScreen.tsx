import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function ProfileScreen() {
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
      <Text style={styles.title}>Configuração de perfil</Text>

      {/* Imagem de perfil */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }} // Substitua pela imagem desejada
          style={styles.profileImage}
        />
        <Ionicons name="create-outline" size={20} color="orange" style={styles.editIcon} />
      </View>

      {/* Informações Pessoais */}
      <Text style={styles.sectionTitle}>Informações Pessoais</Text>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Número</Text>
        <Text style={styles.value}>(55) 4999827-4560</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>Ariberto Fenômeno</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>Ariberto88@gmail.com</Text>
      </View>

      {/* Botão editar */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>EDITAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
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
    marginTop: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoBox: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    color: '#000',
    fontWeight: 'bold',
  },
  value: {
    color: '#000',
  },
  editButton: {
    backgroundColor: '#f15a24',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
