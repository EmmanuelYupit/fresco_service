import React, { Component } from 'react';

import { Animated, TouchableWithoutFeedback, Image } from 'react-native';

export default class ProductListItem extends Component {
    state = {
        animatePress: new Animated.Value(1),
    };

    animateIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 200,
        }).start();
    }

    animateOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 200,
        }).start();
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPressIn={() => this.animateIn()}
                onPressOut={() => this.animateOut()}
            >
                <Animated.View
                    style={{
                        margin: 5,
                        transform: [
                            {
                                scale: this.state.animatePress,
                            },
                        ],
                    }}
                >
                    <Image
                        style={{ width: '33%', height: 100 }}
                        source={this.props.image}
                    ></Image>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}
