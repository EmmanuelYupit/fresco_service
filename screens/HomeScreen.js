import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import global from '../store/global';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Dimensions,
    Button,
    RefreshControl,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import productImage from '../components/product/Image.js';

const width = Dimensions.get('window').width;

import api from '../services/api';
export default function HomeScreen({ navigation }) {
    const [products, setProducts] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        getProducts();
    }, [refreshing]);

    useEffect(() => {
        getProducts();
        return () => {
            console.log('This will be logged on unmount');
        };
    }, []);

    async function login() {
        const {
            data: { token },
        } = await api.auth.signin();
        global.auth.set(token);
    }

    async function getProducts() {
        setRefreshing(true);
        if (global.auth.token === '') {
            await login();
        }
        const { data } = await api.product.list();
        setProducts(data);
        setRefreshing(false);
    }

    function _renderItemFood(item) {
        const { id } = item;
        return (
            <TouchableOpacity
                style={styles.divFood}
                onPress={() => navigation.navigate('Detail', { productId: id })}
            >
                <Image
                    style={styles.imageFood}
                    resizeMode="contain"
                    source={productImage(item.imageUrl)}
                />
                <View
                    style={{
                        height: width / 2 - 20 - 90,
                        backgroundColor: 'transparent',
                        width: width / 1 - 1 - 1,
                    }}
                />
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        textAlign: 'center',
                    }}
                >
                    {item.name}
                </Text>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>
                    {item.description.substring(0, 18)}...
                </Text>
                <Text style={{ fontSize: 20, color: 'green' }}>
                    ${item.prices[0].price}
                </Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.welcomeContainer}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <FlatList
                    //horizontal={true}
                    data={products}
                    numColumns={3}
                    renderItem={({ item }) => _renderItemFood(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>

            <View style={styles.tabBarInfoContainer}></View>
        </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9F0C1',
    },

    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {},
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
    },

    navigationFilename: {},
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    imageBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    divCategorie: {
        backgroundColor: 'red',
        margin: 5,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    titleCatg: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    imageFood: {
        width: width / 3 - 30 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -20,
    },
    divFood: {
        width: width / 3 - 13,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        shadowOpacity: 0.3,
        shadowRadius: 50,
        backgroundColor: '#E9F0C1',
    },
});
