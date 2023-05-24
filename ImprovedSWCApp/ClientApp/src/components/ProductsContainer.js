import { useState, useEffect } from 'react';
import StoreProducts from './StoreProducts';

const ProductsContainer = ({ productType }) => {
    const localStorageKey = 'products';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem(localStorageKey));
        if (storedProducts) {
            setProducts(storedProducts);
        }
    }, [localStorageKey]);

    const filteredProducts = productType === 'All'
        ? products
        : products.filter(product => product.type === productType);

    return (
        <StoreProducts
            products={filteredProducts}
            setProducts={setProducts}
            productType={productType}
            localStorageKey={localStorageKey}
        />
    );
};

export default ProductsContainer;


//import { useState } from 'react';
//import StoreProducts from './StoreProducts';


//const ProductsContainer = ({ productType }) => {

//    const localStorageKey = "products";

//    const [products, setProducts] = useState(JSON.parse(localStorage.getItem(localStorageKey)))

//    var data = [];
//    var setFunc = null;

//    data = products;
//    setFunc = setProducts

//    console.log("here again")
//    return (
//        <StoreProducts products={data} setProducts={setFunc} productType={productType} localStorageKey={localStorageKey} />
//    )


//}

//export default ProductsContainer;


