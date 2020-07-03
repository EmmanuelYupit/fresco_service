const productImage = (image) => {
    // console.log("-----------sssss-----------------------");
    switch (image) {
        case 'aguacate':
            return require('../../assets/images/products/aguacate.png');
        case 'jitomate':
            return require('../../assets/images/products/jitomate.png');
        case 'limon':
            return require('../../assets/images/products/limon.png');
    }
};

export default productImage;
