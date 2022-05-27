import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Surface, Provider, Title, TextInput } from 'react-native-paper';
import Button from '../components/Button'
import axios from 'axios';

const SingUpScreen = ({ navigation: { navigate } }) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const tipoConsulta = 1;
    const [nameU, setNameU] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [gratis, setGratis] = React.useState(0);
    const [tier1, setTier1] = React.useState(0);
    const [tier2, setTier2] = React.useState(0);



    const crearUsuario = async () => {
        try {
            const obj = { email, password, tipoConsulta, nameU, address, phone, gratis, tier1, tier2 }
            const respuesta = await axios.post('http://127.0.0.1/php/', obj)
            console.log("hola")
        } catch (error) {
            console.error(error.response.data);
        }
    }

    return (
        <View style={styles.box}>
            <TextInput
                style={styles.texInput}
                label="Correo electronico"
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                style={styles.texInput}
                label="Contraseña"
                value={password}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
            />
            <TextInput
                style={styles.texInput}
                label="Nombre"
                value={nameU}
                onChangeText={nameU => setNameU(nameU)}
            />
            <TextInput
                style={styles.texInput}
                label="Telefono"
                value={phone}
                onChangeText={phone => setPhone(phone)}
            />
            <TextInput
                style={styles.texInput}
                label="Direccion"
                value={address}
                onChangeText={address => setAddress(address)}
            />
            <Button title="SingUp" onPress={() => crearUsuario()} description="Crear Cuenta" />

        </View>
    );
}

export default SingUpScreen;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        height: (Dimensions.get("window").height * 81) / 100,
        width: (Dimensions.get("window").width * 100) / 100,
        justifyContent: 'center',
        padding: 15
    },
    texInput: {
        marginVertical: 15
    }
});