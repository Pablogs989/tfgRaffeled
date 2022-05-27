import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput, List } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Button from '../components/Button'
import axios from 'axios';


const CreateScreen = ({ navigation: { navigate } }) => {

    const tipoConsulta = 2;

    //Nombre
    const [name, setName] = React.useState("");

    //Descripcion
    const [description, setDescription] = React.useState("");

    // Lista tipos
    const [expanded, setExpanded] = React.useState(false);
    const handlePress = () => setExpanded(!expanded);
    const tiers = ["Gratis", "Tier 1", "Tier 2", "Tier 3"];
    const [type, setType] = useState(tiers[0]);

    const handleOnPressType = (tiers) => {
        setType(tiers);
        setExpanded(false);
    }

    //Imagen
    const [selectedImage, setSelectedImage] = React.useState(null);
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,

        });
        setSelectedImage({ localUri: pickerResult.uri });
        console.log(selectedImage)
    };

    // const image = (
    // if (selectedImage == null)
    //     return (
    //         <Image style={styles.image} source={require('../assets/ImagePicker.png')} />
    //     );
    // else
    //     return (
    //         <Image style={styles.image} source={{ uri: selectedImage.localUri }} />
    //     )
    //     )




    //Publicar sorteo
    const publicar = async () => {
        const obj = { tipoConsulta, name, description, selectedImage, type }
        const respuesta = await axios.post('http://127.0.0.1/php/', obj)
      }



    return (
        <View style={styles.box}>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.imagePicker}>
                <Image style={styles.image} source={require('../assets/ImagePicker.png')} />
            </TouchableOpacity>
            <TextInput
                style={styles.box_TextInput}
                label="Nombre"
                value={name}
                onChangeText={name => setName(name)}
            />
            <TextInput
                style={styles.box_TextInputBig}
                label="Descripcion"
                value={description}
                onChangeText={description => setDescription(description)}
                multiline={true}
            />
            <List.Accordion style={styles.list} title={type} expanded={expanded} onPress={() => expanded ? setExpanded(false) : setExpanded(true)}>
                {tiers.map((tiers, index) => {
                    return (<List.Item
                        key={index}
                        style={styles.list}
                        title={tiers}
                        onPress={() => handleOnPressType(tiers)}
                    >

                    </List.Item>)
                })}
            </List.Accordion>
            <View style={styles.box_Button}>
                <Button styles={styles.button} title="Crear" onPress={() => publicar()} description="Publicar sorteo" />
            </View>
        </View>
    );
}

export default CreateScreen;

const styles = StyleSheet.create({
    box: {
        flex: 1,
        height: (Dimensions.get("window").height * 81) / 100,
        width: (Dimensions.get("window").width * 100) / 100,
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
        maxHeight: Dimensions.get("window").width * 60 / 100,
        maxWidth: Dimensions.get("window").width * 60 / 100,

    },
    imagePicker: {
        height: (Dimensions.get("window").height * 35) / 100,
        paddingLeft: 70
    },
    box_Button: {
        alignItems: 'center',
    }
});