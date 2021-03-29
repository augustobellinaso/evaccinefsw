import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, Button} from 'react-native';
import AppDataService from "./services/AppDataService";



export default function App() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState(0);
    const [dataNascimento, setDataNascimento] = useState('');
    const [grupo, setGrupo] = useState(null);

    const handleAdd = event => {
        const pessoa = {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            idade: idade,
            dataNascimento: dataNascimento,
            grupo: {
                codigo: grupo
            }
        };
        AppDataService.cadastrarPessoa(pessoa);
    }


  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Cadastro eVaccine</Text>

        <TextInput style={styles.input}
                   onChangeText={setNome}
                   value={nome}
                   placeholder="Nome" placeholderTextColor="#fff"/>

        <TextInput style={styles.input}
                   onChangeText={setCpf}
                   value={cpf}
                   placeholder="CPF" placeholderTextColor="#fff"/>

        <TextInput style={styles.input}
                   onChangeText={setTelefone}
                   value={telefone}
                   placeholder="Telefone" placeholderTextColor="#fff"/>

        <TextInput style={styles.input}
                   onChangeText={setEmail}
                   value={email}
                   placeholder="E-mail" placeholderTextColor="#fff"/>

        <TextInput style={styles.input}
                   onChangeText={setIdade}
                   value={idade}
                   placeholder="Idade" placeholderTextColor="#fff"/>

        <TextInput style={styles.input}
                   onChangeText={setDataNascimento}
                   value={dataNascimento}
                   placeholder="Data de Nascimento" placeholderTextColor="#fff"/>

        <TextInput style={styles.input}
                   onChangeText={setGrupo}
                   value={grupo}
                   placeholder="Grupo Prioritário" placeholderTextColor="#fff"/>

        <Button title="CADASTRAR"
                onPress={handleAdd}/>
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
