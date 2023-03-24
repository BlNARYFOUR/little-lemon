import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View, Alert, KeyboardAvoidingView, Platform } from "react-native";
import littleLemonLogoGrey from "../assets/little-lemon-logo-grey.png";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const onSubscribe = () => Alert.alert('Thanks for subscribing, stay tuned!');
  const validate = (text) => {
    setIsValidEmail(validateEmail(text));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.logoContainer}>
        <Image source={littleLemonLogoGrey} style={styles.logo} />
        <Text style={styles.logoText}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput onChangeText={validate } placeholder="Type your email" keyboardType='email-address' style={styles.input} />
        </View>
        <Pressable disabled={!isValidEmail} onPress={onSubscribe} style={isValidEmail ? styles.button : styles.buttonDisabled}>
          <Text style={styles.buttonText}>SUBSCRIBE</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '5%',
  },
  logoContainer: {
    height: '42.5%',
    width: '70%',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logoText: {
    fontSize: 20,
    textAlign: 'center',
  },
  inputWrapper: {
    width: '90%',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: '5%',
    padding: 7,
  },
  input: {
    fontSize: 20,
  },
  button: {
    width: '90%',
    backgroundColor: '#224715',
    borderStyle: 'solid',
    borderRadius: 10,
    marginBottom: '5%',
  },
  buttonDisabled: {
    width: '90%',
    backgroundColor: '#626161',
    borderStyle: 'solid',
    borderRadius: 10,
    marginBottom: '5%',
  },
  buttonText: {
    color: '#EEE',
    textAlign: 'center',
    fontSize: 20,
    padding: 7,
  }
});

export default SubscribeScreen;
