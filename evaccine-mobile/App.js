import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, Button} from 'react-native';



export default function App() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState(0);
    const [dataNascimento, setDataNascimento] = useState('');
    const [grupo, setGrupo] = useState(null);


  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Cadastro eVaccine</Text>

        <TextInput style={styles.input}
                   placeholder="Nome" placeholderTextColor="#fff"/>
        <TextInput style={styles.input}
                   placeholder="CPF" placeholderTextColor="#fff"/>
        <TextInput style={styles.input}
                   placeholder="Telefone" placeholderTextColor="#fff"/>
        <TextInput style={styles.input}
                   placeholder="E-mail" placeholderTextColor="#fff"/>
        <TextInput style={styles.input}
                   placeholder="Idade" placeholderTextColor="#fff"/>
        <TextInput style={styles.input}
                   placeholder="Data de Nascimento" placeholderTextColor="#fff"/>
        <TextInput style={styles.input}
                   placeholder="Grupo Prioritário" placeholderTextColor="#fff"/>
        <Button title="CADASTRAR"/>
        <StatusBar style="auto"/>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  input: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#0D458D',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#0D458D',

  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 22
  }
});
