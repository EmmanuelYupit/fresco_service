import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import axios from 'axios';

const ProductDetail = ({ route }) => {
    const { productId } = route.params;
    const [detail, setDetail] = useState({});
    const [isLoading, setLoading] = useState(false);

    async function getDetail() {
        setLoading(true);
        console.log('====================================');
        console.log(productId);
        console.log('====================================');
        const { data } = await axios.get(
            `https://fresco.herokuapp.com/api/v1/product/${productId}`
        );
        console.log('====================================');
        console.log('data: ', data);
        console.log('====================================');
        setDetail(data);
        setLoading(false);
    }

    useEffect(() => {
        getDetail();
    }, []);

    console.log('====================================');
    console.log('data data: ', detail);
    console.log('====================================');

    return <View />;
};

export default ProductDetail;
