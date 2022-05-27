import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Surface, Provider, Title, TextInput } from 'react-native-paper';
import Button from '../components/Button'


const LogInScreen = ({ navigation: { navigate } }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
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
            <Button title="SingUp" onPress={() => navigate('TabBarScreen')} description="Iniciar Sesion" />

        </View>
    );
}

export default LogInScreen;

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