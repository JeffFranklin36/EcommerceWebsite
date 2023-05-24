//React features & hooks
import { useEffect, useState } from 'react'
import Cart from './Cart';

const StoreProducts = ({ products, setProducts, productType, localStorageKey }) => {

    useEffect(() => {
        console.log(productType)
        if (products == null) {
            if (productType === 'All') {
                getAllProducts()
            }
            else if (productType === 'Badge') {
                getProductsByType(0)
            }
            else if (productType === 'Apparel') {
                getProductsByType(1)
            }
        }
    }, [productType, products]);

    function getAllProducts() {
        setProducts(null)
        fetch(`product/GetAll`)
            .then((results) => results.json())
            .then((data) => {
                setProducts(data);
            });
    }

    function getProductsByType(pType) {
        setProducts(null)
        console.log(pType, "check me get products by type")
        fetch(`product/GetByType/${pType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                console.log("about to set product by type")
                setProducts(data)
            })
    }

    useEffect(() => {
        if (products != null) {
            localStorage.setItem(localStorageKey, JSON.stringify(products));
            console.log("Local storage set product", localStorageKey)
        }
    }, [products])


    const [selectedType, setSelectedType] = useState('All');
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        if (event.target.value === "All") {
            getAllProducts()
        }
        else{
            console.log("if 0")
            getProductsByType(Number(event.target.value))
        }
    };

    const handleAddToCart = (product) => {
        setSelectedProducts((prevProducts) => [...prevProducts, product]);
    };

    const handleRemoveFromCart = (product) => {
        setSelectedProducts((prevProducts) => prevProducts.filter((p) => p.id !== product.id));
    };

    const handleClearCart = () => {
        setSelectedProducts([]);
    };

    //const filteredProducts = selectedType === 'All'
    //    ? products
    //    : products.filter(product => product.type === selectedType);


    return (
        (products != null)?
        <div>
            <h1>Store</h1>
            <select value={selectedType} onChange={handleTypeChange}>
                <option value="All">All</option>
                <option value={0} >Badges</option>
                <option value={1}>Apparel</option>
            </select>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                    <hr />
                </div>
            ))}
            <Cart
                selectedProducts={selectedProducts}
                removeFromCart={handleRemoveFromCart}
                clearCart={handleClearCart}
            />
            </div>
        :<div>...Loading</div>
    );
};

export default StoreProducts;


//const products = [
//    {
//        id: 1,
//        product: '3-Day Pass',
//        type: 'pass',
//        description: 'General admission pass for all three days of Star Wars Celebration Japan',
//        price: 100
//    },
//    {
//        id: 2,
//        product: 'Friday Pass',
//        type: 'pass',
//        description: 'General admission pass for Friday of Star Wars Celebration Japan',
//        price: 75
//    },
//    {
//        id: 3,
//        product: 'Saturday Pass',
//        type: 'pass',
//        description: 'General admission pass for Saturday of Star Wars Celebration Japan',
//        price: 75
//    },
//    {
//        id: 4,
//        product: 'Sunday Pass',
//        type: 'pass',
//        description: 'General admission pass for Sunday of Star Wars Celebration Japan',
//        price: 75
//    },
//    {
//        id: 5,
//        product: 'Kids 3-Day Pass',
//        type: 'pass',
//        description: 'General admission pass for Children for Star Wars Celebration Japan',
//        price: 80
//    },
//    {
//        id: 6,
//        product: 'Kids Single-Day Pass',
//        type: 'pass',
//        description: 'General admission pass for Children for Star Wars Celebration Japan',
//        price: 50
//    },
//    {
//        id: 7,
//        product: 'Celebration T-Shirt',
//        type: 'apparel',
//        description: 'Official T-Shirt for Star Wars Celebration Japan',
//        price: 40
//    },
//    {
//        id: 8,
//        product: 'Celebration Crewneck',
//        type: 'apparel',
//        description: 'Official Crewneck for Star Wars Celebration Japan',
//        price: 50
//    },
//    {
//        id: 9,
//        product: 'Celebration Hoodie',
//        type: 'apparel',
//        description: 'Official Hoodie for Star Wars Celebration Japan',
//        price: 50
//    },
//    {
//        id: 10,
//        product: 'Celebration Polo',
//        type: 'apparel',
//        description: 'Official Polo for Star Wars Celebration Japan',
//        price: 50
//    },
//    {
//        id: 11,
//        product: 'Celebration Baseball Cap',
//        type: 'apparel',
//        description: 'Official Cap for Star Wars Celebration Japan',
//        price: 35
//    },
//    {
//        id: 12,
//        product: 'Celebration Scarf',
//        type: 'apparel',
//        description: 'Official Scarf for Star Wars Celebration Japan',
//        price: 25
//    }
//];