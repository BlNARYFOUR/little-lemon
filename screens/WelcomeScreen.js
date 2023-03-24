import * as React from 'react';
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import littleLemonLogo from "../assets/little-lemon-logo.png";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={littleLemonLogo} style={styles.logo} />
        <Text style={styles.logoText}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('Subscribe')} style={styles.button}><Text style={styles.buttonText}>NEWSLETTER</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  logoContainer: {
    height: '72.5%',
    width: '70%',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: '17.5%',
    alignSelf: 'center',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    width: '90%',
    backgroundColor: '#224715',
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

export default WelcomeScreen;
