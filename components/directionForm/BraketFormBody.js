import React, { useState } from 'react';
import { View, Dimensions, Button, TextInput } from 'react-native';
import FormTextInput from './FormTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import global from '../../store/global';

const { height, width } = Dimensions.get('window');

export default function BracketFormBody() {
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
                <FormTextInput
                    fieldName="postalCode"
                    placeholder="Código Postal"
                />
                <FormTextInput fieldName="" placeholder="Delegación" />
                <FormTextInput fieldName="name" placeholder="Dirección" />
                <FormTextInput fieldName="name" placeholder="Referencia" />
                <FormTextInput fieldName="name" placeholder="Teléfono" />
                <FormTextInput fieldName="name" placeholder="Nombre" />
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
