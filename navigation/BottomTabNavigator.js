import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OrderStateScreen from '../screens/OrderStateScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html

    navigation.setOptions({
        headerTitle: getHeaderTitle(route),
        headerTitleStyle: { textAlign: 'center' },
    });

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Productos"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name="md-code-working" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    title: 'Carrito',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name="md-basket" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="OrderState"
                component={OrderStateScreen}
                options={{
                    title: 'Orden',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name="md-book" />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName =
        route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Products':
            return 'Nuestros Productos';
        case 'Cart':
            return 'Carrito';
        case 'ProductDetail':
            return 'ProductDetail';
        case 'OrderState':
            return 'Mi orden';
    }
}
