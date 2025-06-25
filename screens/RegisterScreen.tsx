import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.subtext}>
          Já possui cadastro?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('Login' as never)}>Entrar</Text>
        </Text>

        <View style={styles.row}>
          <TextInput style={[styles.input, { flex: 1, marginRight: 5 }]} placeholder="Nome" />
          <TextInput style={[styles.input, { flex: 1, marginLeft: 5 }]} placeholder="Sobrenome" />
        </View>

        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Data de Nascimento" />

        <TextInput style={styles.input} placeholder="Número" keyboardType="phone-pad" />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Senha"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fcb045', alignItems: 'center', padding: 20 },
  logo: { width: 80, height: 80, marginTop: 60 },
  back: { position: 'absolute', top: 60, left: 20 },
  form: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    width: '100%',
    elevation: 5,
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fcb045', textAlign: 'center', marginBottom: 5 },
  subtext: { textAlign: 'center', marginBottom: 20 },
  link: { color: '#007BFF', textDecorationLine: 'underline' },
  input: {
    backgroundColor: '#f3f3f3',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f3f3', borderRadius: 10, paddingRight: 10, marginBottom: 20 },
  button: {
    backgroundColor: '#fcb045',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default RegisterScreen;
