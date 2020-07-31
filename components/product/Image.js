const productImage = (image) => {
    // console.log("-----------sssss-----------------------");
    switch (image) {
        case 'aguacate':
            return require('../../assets/images/products/aguacate.png');
        case 'jitomate':
            return require('../../assets/images/products/jitomate.png');
        case 'limon':
            return require('../../assets/images/products/limon.png');
        case 'ajo':
            return require('../../assets/images/products/ajo.png');
        case 'melon':
            return require('../../assets/images/products/melon.png');
        case 'cebolla':
            return require('../../assets/images/products/cebolla.png');
        case 'calabaza':
            return require('../../assets/images/products/calabaza.png');
        case 'jalapeno':
            return require('../../assets/images/products/jalapeno.png');
        case 'papa':
            return require('../../assets/images/products/papa.png');
        case 'pepino':
            return require('../../assets/images/products/pepino.png');
        case 'poblano':
            return require('../../assets/images/products/poblano.png');
        case 'sandia':
            return require('../../assets/images/products/sandia.png');
        case 'serrano':
            return require('../../assets/images/products/serrano.png');
        case 'zanahoria':
            return require('../../assets/images/products/zanahoria.png');
        case 'cebolla_amarilla':
            return require('../../assets/images/products/cebolla_amarilla.png');
        case 'cebolla_morada':
            return require('../../assets/images/products/cebolla_morada.png');
        case 'jitomate_saladette':
            return require('../../assets/images/products/jitomate_saladette.png');
        case 'tomate_verde':
            return require('../../assets/images/products/tomate_verde.png');
    }
};

export default productImage;
