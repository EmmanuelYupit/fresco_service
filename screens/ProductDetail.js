import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import productImage from '../components/product/Image';

const { height, width } = Dimensions.get('window');
export default function ProductDetail({ route, navigation }) {
    const { productId } = route.params;
    const [detail, setDetail] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        getDetail();
    }, []);

    async function getDetail() {
        setLoading(true);
        const { data } = await axios.get(
            `https://fresco.herokuapp.com/api/v1/product/${productId}`
        );
        setDetail(data);
        setLoading(false);
    }

    function handleQuantity(action) {
        setQuantity(
            action === 'add' ? quantity + 1 : quantity > 1 ? quantity - 1 : 1
        );
    }

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <View style={{ height: 20 }} />
            <View style={{ height: 10 }} />
            {isLoading ? (
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
                <>
                    <View style={{ flex: 1 }}>
                        <View
                            style={{
                                width: width - 20,
                                margin: 10,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                borderColor: '#cccccc',
                            }}
                        >
                            <Image
                                resizeMode={'contain'}
                                style={{ width: width / 2, height: width / 3 }}
                                source={productImage(detail.product.imageUrl)}
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
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 40,
                                        }}
                                    >
                                        ${detail.price}
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 20,
                                        }}
                                    >
                                        {detail.unitType}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                width: width - 20,
                                margin: 10,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                                paddingBottom: 10,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 30,
                                    textAlign: 'center',
                                }}
                            >
                                {detail.product.description}
                            </Text>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => handleQuantity('substract')}
                                >
                                    <Icon
                                        name="ios-remove-circle"
                                        size={40}
                                        color={'#9fd236'}
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        paddingHorizontal: 8,
                                        fontWeight: 'bold',
                                        fontSize: 30,
                                    }}
                                >
                                    {quantity} {quantity > 1 ? 'kilos' : 'kilo'}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => handleQuantity('add')}
                                >
                                    <Icon
                                        name="ios-add-circle"
                                        size={40}
                                        color={'#9fd236'}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: '#9fd236',
                                    fontSize: 40,
                                    alignItems: 'center',
                                }}
                            >
                                ${quantity * detail.price} Total
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
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
                            Agregar al carrito
                        </Text>
                    </TouchableOpacity>

                    <View style={{ height: 20 }} />
                </>
            )}
        </View>
    );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
    return (
        <RectButton
            style={[styles.option, isLastOption && styles.lastOption]}
            onPress={onPress}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                    <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>{label}</Text>
                </View>
            </View>
        </RectButton>
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
});
