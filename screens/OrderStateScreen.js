import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import global from '../store/global';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Card, Paragraph, Title, Button } from 'react-native-paper';

export default function OrderStateScreen() {
    console.log('====================================');
    console.log('new order view: ', global.order.current);
    console.log('====================================');

    return (
        <Card>
            <Card.Content backgroundColor="#E9F0C1">
                <Title
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Estado de la orden
                </Title>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingBottom: 10,
                    }}
                >
                    Pagado
                </Text>
                <Button
                    mode="contained"
                    onPress={() => console.log('Pressed')}
                    style={{
                        backgroundColor: 'red',
                    }}
                >
                    Cancelar
                </Button>

                <Text
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
                </Text>
            </Card.Content>
        </Card>
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
