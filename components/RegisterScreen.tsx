import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import CustomInput from './CustomInput';

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handleRegister = () => {
    console.log('handleRegister çalıştı');

    if (password !== passwordAgain) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor!');
      return;
    }
    console.log('Kayıt başarılı:', { email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <CustomInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomInput
        placeholder="Şifre Tekrar"
        value={passwordAgain}
        onChangeText={setPasswordAgain}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Kayıt Ol" onPress={handleRegister} color={'green'}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default RegisterScreen;
