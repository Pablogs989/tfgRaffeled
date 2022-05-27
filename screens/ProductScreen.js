import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput, List } from 'react-native-paper';
import Button from '../components/Button'


const ProductScreen = ({ navigation: { navigate } }) => {


    return (
        <View style={styles.box}>
            <View style={styles.centerImage}>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={require('../assets/Ejemplo.jpg')} />
                </View>
            </View>
            <View style={styles.textBox}>
                <TextInput
                    style={styles.box_TextInput}
                    label="Nombre"
                    value="Prueba"
                    editable={false}
                />
                <TextInput
                    style={styles.box_TextInputBig}
                    label="Descripcion"
                    value="Descripcion ejemplo"
                    editable={false}
                    multiline={true}
                />
                <TextInput
                    style={styles.box_TextInput}
                    value="Tier 1"
                    editable={false}
                />
                <View style={styles.box_Button}>
                    <Button styles={styles.button} title="Apuntarse" onPress={() => navigate('MainScreen')} description="Participar" />
                </View>
            </View>
        </View>
    );
}

export default ProductScreen;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
        justifyContent: 'center',
    },

    box_TextInput: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 0,
        elevation: 0,
    },
    box_TextInputBig: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 0,
        elevation: 0,
        height: 125
    },
    image: {
        maxHeight: Dimensions.get("window").width * 50 / 100,
        maxWidth: Dimensions.get("window").width * 50 / 100,

    },
    imageBox: {
        flex: 4,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get("window").height * 37) / 100,
    },
    centerImage: {
        flex: 4,
        alignItems: 'center',
    },
    textBox: {
        flex: 7,
    },

    box_Button: {
        alignItems: 'center',
    }
});