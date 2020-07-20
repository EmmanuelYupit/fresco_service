import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../services/api';
import global from '../store/global';

const { height, width } = Dimensions.get('window');

export default function Deliver({ navigation }) {
    const [deliveryAddress, setDeliveryAddres] = useState({
        phone: '',
        direction: '',
        postalCode: '',
        comments: '',
        latitude: 86,
        longitude: 150,
    });
    const [isLoading, setLoading] = useState(false);

    const { phone, direction, postalCode, comments } = deliveryAddress;

    function getTotal() {
        const { orderProducts } = global.order.current;
        return orderProducts.reduce(
            (total, { totalPrice }) => total + totalPrice,
            0
        );
    }

    async function onSubmit() {
        setLoading(true);
        try {
            const order = await deliver();
            global.order.set(order);
            setLoading(false);
            navigation.navigate('Forma de pago', { getTotal: getTotal() });
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }

    async function deliver() {
        await api.order.deliver(global.order.current.id, deliveryAddress);
        const { data } = await api.order.byId(global.order.current.id);
        return data;
    }

    function onChange(name, value) {
        setDeliveryAddres({ ...deliveryAddress, [name]: value });
    }

    return isLoading ? (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    ) : (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
            <View style={{ width: '90%' }}>
                <TextInput
                    keyboardType="numeric"
                    maxLength={5}
                    style={styles.input}
                    value={postalCode}
                    placeholder="Código Postal"
                    onChangeText={(value) => onChange('postalCode', value)}
                />
                <TextInput
                    style={styles.input}
                    value={direction}
                    placeholder="Dirección"
                    onChangeText={(value) => onChange('direction', value)}
                />
                <TextInput
                    keyboardType="numeric"
                    maxLength={10}
                    style={styles.input}
                    value={phone}
                    placeholder="Teléfono"
                    onChangeText={(value) => onChange('phone', value)}
                />
                <TextInput
                    style={styles.input}
                    value={comments}
                    placeholder="Referencia"
                    onChangeText={(value) => onChange('comments', value)}
                />
            </View>
            <View style={{ height: 20 }} />
            <TouchableOpacity
                style={{
                    backgroundColor: '#9fd236',
                    width: '90%',
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
    input: {
        height: 50,
        backgroundColor: '#fff',
        // borderColor: 'gray',
        // borderWidth: 1,
        marginTop: 5,
    },
});
