import React, { useState, useCallback } from 'react';
import global from '../store/global';
import api from '../services/api';
import { useFocusEffect } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
} from 'react-native';
import { RectButton, ScrollView, FlatList } from 'react-native-gesture-handler';
import productImage from '../components/product/Image.js';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

export default function CartScreen({ navigation }) {
    const [products, setProducts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [orderProductId, setorderProductId] = useState(null);

    useFocusEffect(
        useCallback(() => {
            getProducts();
            return () => {
                getProducts();
            };
        }, [products])
    );

    function getProducts() {
        const { orderProducts } = global.order.current;
        setProducts(orderProducts);
    }

    function getOrderTotal() {
        return global.order.current.id
            ? products.reduce((total, { totalPrice }) => total + totalPrice, 0)
            : 0;
    }

    async function onRemove() {
        try {
            const order = await remove();
            global.order.set(order);
            setModalVisible(!modalVisible);
            getProducts();
        } catch (err) {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        }
    }

    async function remove() {
        await api.order.deleteProduct(global.order.current.id, orderProductId);
        const { data } = await api.order.byId(global.order.current.id);
        return data;
    }

    const DecideModal = (props) => (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        ¿Desea eliminar este elemento de su carrito?
                    </Text>

                    <TouchableHighlight
                        style={{
                            ...styles.openButton,
                            backgroundColor: 'red',
                            marginBottom: 15,
                        }}
                        onPress={() => onRemove()}
                    >
                        <Text style={{ color: '#fff' }}>Eliminar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{}}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Text>Cancelar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );

    function _renderItemFood({ id, amount, totalPrice, product }) {
        const { name, imageUrl, description } = product;
        return (
            <View
                style={{
                    width: width - 20,
                    margin: 10,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderColor: '#cccccc',
                    paddingBottom: 10,
                }}
                key={id}
            >
                <Image
                    resizeMode={'contain'}
                    style={{ width: width / 3, height: width / 3 }}
                    source={productImage(imageUrl)}
                />
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        padding: 10,
                        justifyContent: 'space-between',
                    }}
                >
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            {name}
                        </Text>
                        <Text>{description}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: '#9fd236',
                                fontSize: 20,
                            }}
                        >
                            ${totalPrice}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setorderProductId(id);
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Ionicons
                            name="md-trash"
                            size={30}
                            style={{ marginTop: '60%' }}

                            //   color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            paddingHorizontal: 8,
                            fontWeight: 'bold',
                        }}
                    >
                        {amount} kilos
                    </Text>
                </View>
            </View>
        );
    }
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <DecideModal />
            <View style={{ flex: 1 }}>
                <FlatList
                    //horizontal={true}
                    data={products}
                    numColumns={1}
                    renderItem={({ item }) => _renderItemFood(item)}
                />
            </View>

            <View style={{ height: 20 }} />

            <TouchableOpacity
                disabled={global.order.current.id ? false : true}
                onPress={() =>
                    navigation.navigate('Información de entrega', {
                        total: getOrderTotal(),
                    })
                }
                style={{
                    backgroundColor: '#9fd236',
                    width: width - 40,
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 5,
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: 'white',
                    }}
                >
                    COMPRAR ${getOrderTotal()}
                </Text>
            </TouchableOpacity>

            <View style={{ height: 20 }} />
        </View>
    );
}

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
        backgroundColor: 'white',
        borderRadius: 20,
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
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
