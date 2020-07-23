import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import global from '../store/global';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Card, Paragraph, Title, Button } from 'react-native-paper';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const { height, width } = Dimensions.get('window');

export default function OrderStateScreen() {
    console.log('====================================');
    console.log('new order view: ', global.order.current);
    console.log('====================================');

    const statusArr = [
        { id: 0, name: 'paying', label: 'Elección de método de pago' },
        { id: 1, name: 'preparing', label: 'Preparando orden' },
        { id: 2, name: 'delivered', label: 'En camino' },
        { id: 3, name: 'recieved', label: 'Entregado' },
    ];

    return (
        <View style={{ flex: 1, marginTop: 15 }}>
            <ProgressSteps completedLabelColor="#82749a">
                {statusArr.map(({ id, label }) => (
                    <ProgressStep
                        key={id}
                        label={label}
                        removeBtnRow={true}
                    ></ProgressStep>
                ))}
            </ProgressSteps>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    disabled={global.order.current.id ? false : true}
                    // onPress={() =>
                    //     navigation.navigate('Información de entrega', {
                    //         total: getOrderTotal(),
                    //     })
                    // }
                    style={{
                        backgroundColor: '#cccccc',
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
                        CANCELAR
                    </Text>
                </TouchableOpacity>
                <View style={{ height: 20 }} />
            </View>
        </View>
    );
    // <Card>
    // <Card.Content backgroundColor="#E9F0C1">

    {
        /* <Text
                    style={{
                        fontSize: 24,
                        textAlign: 'center',
                        paddingBottom: 10,
                        marginTop: 20,
                        borderRadius: 10,
                        backgroundColor: '#f8f9fa',
                    }}
                >
                    Incididunt sunt magna est tempor qui consequat. Est labore
                    non ea non. Enim duis amet dolore id. Et officia ullamco
                    nostrud sit nisi consectetur est ipsum ex. Occaecat aliqua
                    fugiat consequat veniam.
                </Text> */
    }
    // </Card.Content>
    // </Card>
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
