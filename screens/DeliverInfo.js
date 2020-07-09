import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import global from '../store/global';

const { height, width } = Dimensions.get('window');

export default function Deliver() {
    const [deliveryAddress, setDeliveryAddres] = useState({
        order: global.order.current.id,
        phone: '',
        direction: '',
        postalCode: '',
        extraComments: '',
    });

    function getTotal() {
        const { orderProducts } = global.order.current;
        return orderProducts.reduce(
            (total, { totalPrice }) => total + totalPrice,
            0
        );
    }

    function onSubmit() {}

    function onChange(e) {
        const { target, text } = e;
        setDeliveryAddres({ ...deliveryAddress, [target]: text });
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
            <View style={{ width: 300 }}>
                <TextInput placeholder="Código Postal" />
                <TextInput placeholder="Delegación" />
                <TextInput placeholder="Dirección" />
                <TextInput placeholder="Referencia" />
                <TextInput placeholder="Teléfono" />
                <TextInput placeholder="Nombre" />
            </View>
            <View style={{ height: 20 }} />
            <TouchableOpacity
                style={{
                    backgroundColor: '#9fd236',
                    width: width - 40,
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 5,
                }}
                onPress={onSubmit}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'white',
                    }}
                >
                    COMPRAR ${getTotal()}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});
