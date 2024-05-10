import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic here, e.g., send data to server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder=" Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder=" Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder=" Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom:20,
  },
  button:{
    color: 'yellow',
  },
  
});

export default Register;
