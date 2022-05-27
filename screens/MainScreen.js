import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { Title } from 'react-native-paper';
import Button from '../components/Button';


const MainScreen = ({ navigation: { navigate } }) => {

    const images = ["../assets/Ejemplo.png", "../assets/Logo.png"]

    return (
        <ImageBackground style={styles.ImageBackground} source={require('../assets/fondo.png')}>

            <View style={styles.box}>
                <SafeAreaView style={styles.SafeAreaView}>
                    <Title style={styles.title}>Gratis</Title>
                    <ScrollView style={styles.scrollGratis} horizontal={true}>
                        <Image style={styles.image} source={require('../assets/Ejemplo4.png')} />
                        <Image style={styles.image} source={require('../assets/Ejemplo5.png')} />
                        <Image style={styles.image} source={require('../assets/Ejemplo6.png')} />
                    </ScrollView>
                    <Title style={styles.title2}>Tier 1</Title>
                    <ScrollView style={styles.scrollTier1} horizontal={true}>
                        <TouchableOpacity onPress={() => navigate('ProductScreen')} style={styles.imagePicker}>
                            <Image style={styles.image} source={require('../assets/Ejemplo.png')} />
                        </TouchableOpacity>
                        <Image style={styles.image} source={require('../assets/Ejemplo2.jpg')} />
                        <Image style={styles.image} source={require('../assets/Ejemplo3.jpg')} />
                    </ScrollView>
                    <Title style={styles.title3}>Tier 2</Title>
                    <ScrollView style={styles.scrollTier2} horizontal={true}>
                        <Image style={styles.image} source={require('../assets/Ejemplo7.jpeg')} />
                        <Image style={styles.image} source={require('../assets/Ejemplo8.jpg')} />
                        <Image style={styles.image} source={require('../assets/Ejemplo9.jpg')} />
                    </ScrollView>
                </SafeAreaView>
            </View>
        </ImageBackground>

    );

    // <ScrollView horizontal={true}>
    //     {images.map((image, index) => {
    //         return(
    //             <Image source={require({ image })} ></Image>

    //         );
    //     })
    // </ScrollView>
}

export default MainScreen;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
        justifyContent: 'center',
    },
    image: {
        height: 100,
        width: 100,
        alignSelf: 'center',
    },
    SafeAreaView: {
        alignItems: 'center',
        padding: 10,
        margin: 10,
    },
    scrollGratis: {
        margin: 15,
        color: '#E29F59'
    },
    scrollTier1: {
        margin: 15,

    },
    scrollTier2: {
        margin: 15,

    },
    productCard: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        color: '#E29F59',
        fontSize: 28
    },
    title2: {
        color: '#333333',
        fontSize: 28
    },
    title3: {
        color: '#F0D600',
        fontSize: 28
    },
    ImageBackground: {
        height: 650,
        width: 375,
    },
});