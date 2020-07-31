import React, { useState } from 'react';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
    View,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    StyleSheet,
    TextInput,
} from 'react-native';
import global from '../store/global';

const Payment = ({ navigation, route }) => {
    const { getTotal } = route.params;
    const [payment, setPayment] = useState(-1);
    const [isLoading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [
        confirmPaymentModalVisible,
        setConfirmPaymentModalVisible,
    ] = useState(false);
    const paymentTypes = [
        { id: 0, label: 'Efectivo a la entrega', value: 'cash' },
        { id: 1, label: 'Depósito en Oxxo', value: 'oxxo' },
        // {
        //     id: 2,
        //     label: 'Tarjeta de Débito/Crédito (Próximamente)',
        //     value: 'debit-credit',
        // },
    ];

    function handleSubmit() {
        console.log('====================================');
        console.log(payment);
        console.log('====================================');
        if (payment === 1) {
            setModalVisible(!modalVisible);
        }
    }

    const DepositModal = (props) => (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        Referencia para depósito en Oxxo:{' '}
                        <Text style={{ fontWeight: 'bold' }}>00000000</Text>
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: '#9fd236',
                            }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                setConfirmPaymentModalVisible(
                                    !confirmPaymentModalVisible
                                );
                            }}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                Confirmar pago
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </Modal>
    );

    const ConfirmPaymentModal = (props) => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={confirmPaymentModalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        Referencia para depósito en Oxxo:{' '}
                        <Text style={{ fontWeight: 'bold' }}>00000000</Text>
                    </Text>
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <TextInput
                            keyboardType="numeric"
                            // maxLength={5}
                            style={styles.input}
                            // value={postalCode}
                            placeholder="Ingresa tu número de folio"
                            // onChangeText={(value) =>
                            //     onChange('postalCode', value)
                            // }
                        />
                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: '#9fd236',
                            }}
                            onPress={() => {
                                setConfirmPaymentModalVisible(
                                    !confirmPaymentModalVisible
                                );
                            }}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                Confirmar pago
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </Modal>
    );

    return isLoading ? (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ActivityIndicator size="large" color="#82749a" />
        </View>
    ) : (
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
            <DepositModal />
            <ConfirmPaymentModal />
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
                onPress={handleSubmit}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    openButtonCancel: {
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        // borderColor: 'gray',
        borderWidth: 2,
        // marginTop: 10,
        borderRadius: 5,
        borderColor: '#82749a',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default Payment;
