import React, { useState } from 'react';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import global from '../store/global';

const Payment = ({ navigation, route }) => {
    const { getTotal } = route.params;
    const [payment, setPayment] = useState(-1);
    const [isLoading, setLoading] = useState(false);
    const paymentTypes = [
        { id: 0, label: 'Efectivo a la entrega', value: 'cash' },
        { id: 1, label: 'Depósito en Oxxo', value: 'oxxo' },
        {
            id: 2,
            label: 'Tarjeta de Débito/Crédito (Próximamente)',
            value: 'debit-credit',
        },
    ];

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
                <RadioForm animation={true}>
                    {paymentTypes.map((obj, i) => (
                        <RadioButton
                            labelHorizontal={true}
                            key={i}
                            style={{ marginTop: 15 }}
                        >
                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={payment === i}
                                borderWidth={2}
                                buttonInnerColor={'#82749a'}
                                buttonOuterColor={'#000'}
                                buttonSize={30}
                                buttonOuterSize={40}
                                buttonStyle={{}}
                                buttonWrapStyle={{ marginLeft: 10 }}
                                onPress={() => {
                                    setPayment(i);
                                }}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                labelStyle={{ fontSize: 20 }}
                                labelWrapStyle={{}}
                                onPress={() => {
                                    setPayment(i);
                                }}
                            />
                        </RadioButton>
                    ))}
                </RadioForm>
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
                onPress={() => {
                    navigation.navigate('home');
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'white',
                    }}
                >
                    COMPRAR ${getTotal}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Payment;
