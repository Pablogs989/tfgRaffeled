import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Button from '../components/Button'
import {NavigationContainer} from '@react-navigation/native';

const WelcomeScreen = ({ navigation: { navigate } }) => {

    return (
        <View style={styles.box}>
            <View style={styles.imageFLex}>
                <Image style={styles.image} source={require('../assets/Logo.png')} />
                <Text></Text>
                <Text></Text>
                <Button title="Login" onPress={() => navigate('LogInScreen')} description="Iniciar Sesion" />
                <Text></Text>
                <Button title="SingUp" onPress={() => navigate('SingUpScreen')} description="Crear Cuenta" />
 
            </View>
        </View>
        
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        height: Dimensions.get("screen").height,
    },

    imageFLex: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        maxHeight: Dimensions.get("window").width * 80 / 100,
        maxWidth: Dimensions.get("window").width * 80 / 100,

    },


})