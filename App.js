import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import ProductDetail from './screens/ProductDetail';
import Deliver from './screens/DeliverInfo';

import useOrder from './store/use.order';
import useToken from './store/use.auth';
import global from './store/global';

const Stack = createStackNavigator();

export default function App(props) {
    global.auth = useToken();
    global.order = useOrder();
    const isLoadingComplete = useCachedResources();
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            //primary: "#E9F0C1",
            background: '#E9F0C1',
            card: '#E9F0C1',
            border: 'rgb(199, 199, 204)',
        },
    };
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && (
                    <StatusBar barStyle="light-content" />
                )}
                <NavigationContainer
                    linking={LinkingConfiguration}
                    theme={MyTheme}
                >
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Root"
                            component={BottomTabNavigator}
                        />
                        <Stack.Screen name="Detail" component={ProductDetail} />
                        <Stack.Screen
                            name="Información de entrega"
                            component={Deliver}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9F0C1',
    },
});
