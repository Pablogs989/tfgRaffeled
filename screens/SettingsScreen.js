import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Dialog, Button } from 'react-native-paper';


const SettingsScreen = ({ navigation: { navigate } }) => {

    //Gratis
    const [visibleG, setVisibleG] = React.useState(false);
    const hideDialogG = () => setVisibleG(false);
    const [gratis, setGratis] = React.useState(0);

    //Tier 1
    const [visibleT1, setVisibleT1] = React.useState(false);
    const hideDialogT1 = () => setVisibleT1(false);
    const [tier1, setTier1] = React.useState(0);

    //Tier 2
    const [visibleT2, setVisibleT2] = React.useState(false);
    const hideDialogT2 = () => setVisibleT2(false);
    const [tier2, setTier2] = React.useState(0);

    return (
        <View style={styles.box}>

            <View style={styles.textBox}>
                <TextInput
                    style={styles.box_TextInput}
                    label="Nombre"
                    value="Pablo Gonzalez Sanchez"
                    multiline={true}
                    editable={false}
                />
                <TextInput
                    style={styles.box_TextInput}
                    label="eMail"
                    value="pablogonsan2001@gmail.com "
                    multiline={true}
                    editable={false}
                />
                <TextInput
                    style={styles.box_TextInput}
                    label="Telefono"
                    value="652345746"
                    multiline={true}
                    editable={false}
                />
                <TextInput
                    style={styles.box_TextInput}
                    label="Direccion"
                    value="Rafael Lapesa Melgar 2"
                    multiline={true}
                    editable={false}
                />
                <TextInput
                    style={styles.box_TextInput}
                    label="Tickets GRATIS"
                    value={gratis.toString()}
                    editable={false}
                    right={<TextInput.Icon name="plus" onPress={() => visibleG ? setVisibleG(false) : setVisibleG(true)} />}
                />
                <TextInput
                    style={styles.box_TextInput}
                    label="Tickets TIER 1"
                    value={tier1.toString()}
                    editable={false}
                    right={<TextInput.Icon name="plus" onPress={() => visibleT1 ? setVisibleT1(false) : setVisibleT1(true)} />}
                />
                <TextInput
                    style={styles.box_TextInput}
                    label="Tickets TIER 2"
                    value={tier2.toString()}
                     editable={false}
                    right={<TextInput.Icon name="plus" onPress={() => visibleT2 ? setVisibleT2(false) : setVisibleT2(true)} />}
                />
                <Dialog visible={visibleG} onDismiss={hideDialogG}>
                    <Dialog.Actions>
                        <Button color="red" onPress={() => visibleG ? setVisibleG(false) : setVisibleG(true)}>Cancelar</Button>
                        <Button color="blue" onPress={() => setGratis(gratis + 1)}>Confirmar compra</Button>
                    </Dialog.Actions>
                </Dialog>
                <Dialog visible={visibleT1} onDismiss={hideDialogT1}>
                    <Dialog.Actions>
                        <Button color="red" onPress={() => visibleT1 ? setVisibleT1(false) : setVisibleT1(true)}>Cancelar</Button>
                        <Button color="blue" onPress={() => setTier1(tier1 + 1)}>Confirmar compra</Button>
                    </Dialog.Actions>
                </Dialog>
                <Dialog visible={visibleT2} onDismiss={hideDialogT2}>
                    <Dialog.Actions>
                        <Button color="red" onPress={() => visibleT2 ? setVisibleT2(false) : setVisibleT2(true)}>Cancelar</Button>
                        <Button color="blue" onPress={() => setTier2(tier2 + 1)}>Confirmar compra</Button>
                    </Dialog.Actions>
                </Dialog>
            </View>
        </View>
    );
}

export default SettingsScreen;

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
        backgroundColor: '#F2F2F2'
    },
    textBox: {
        flex: 7,
    },

});