import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Button_Medium = (props) => {
    return (
        <Button
            mode="outlined"
            color="white"
            title={props.title}
            onPress={props.onPress}
            style={styles.button}
        >
            {props.description}
        </Button>
    );
}

export default Button_Medium;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 3,
        marginVertical: 10,
        padding: 10,
        width: 300,
        elevation: 10,
        alignSelf: 'center',
    },
})