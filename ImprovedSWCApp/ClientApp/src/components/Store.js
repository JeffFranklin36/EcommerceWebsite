//React features & hooks
import { useEffect, useState } from 'react'
import Cart from './Cart';

const Store = () => {
    const products = [
        {
            id: 1,
            product: '3-Day Pass',
            type: 'pass',
            description: 'General admission pass for all three days of Star Wars Celebration Japan',
            price: 100
        },
        {
            id: 2,
            product: 'Friday Pass',
            type: 'pass',
            description: 'General admission pass for Friday of Star Wars Celebration Japan',
            price: 75
        },
        {
            id: 3,
            product: 'Saturday Pass',
            type: 'pass',
            description: 'General admission pass for Saturday of Star Wars Celebration Japan',
            price: 75
        },
        {
            id: 4,
            product: 'Sunday Pass',
            type: 'pass',
            description: 'General admission pass for Sunday of Star Wars Celebration Japan',
            price: 75
        },
        {
            id: 5,
            product: 'Kids 3-Day Pass',
            type: 'pass',
            description: 'General admission pass for Children for Star Wars Celebration Japan',
            price: 80
        },
        {
            id: 6,
            product: 'Kids Single-Day Pass',
            type: 'pass',
            description: 'General admission pass for Children for Star Wars Celebration Japan',
            price: 50
        },
        {
            id: 7,
            product: 'Celebration T-Shirt',
            type: 'apparel',
            description: 'Official T-Shirt for Star Wars Celebration Japan',
            price: 40
        },
        {
            id: 8,
            product: 'Celebration Crewneck',
            type: 'apparel',
            description: 'Official Crewneck for Star Wars Celebration Japan',
            price: 50
        },
        {
            id: 9,
            product: 'Celebration Hoodie',
            type: 'apparel',
            description: 'Official Hoodie for Star Wars Celebration Japan',
            price: 50
        },
        {
            id: 10,
            product: 'Celebration Polo',
            type: 'apparel',
            description: 'Official Polo for Star Wars Celebration Japan',
            price: 50
        },
        {
            id: 11,
            product: 'Celebration Baseball Cap',
            type: 'apparel',
            description: 'Official Cap for Star Wars Celebration Japan',
            price: 35
        },
        {
            id: 12,
            product: 'Celebration Scarf',
            type: 'apparel',
            description: 'Official Scarf for Star Wars Celebration Japan',
            price: 25
        }
    ];

    const [selectedType, setSelectedType] = useState('all');
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
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

    const filteredProducts = selectedType === 'all'
        ? products
        : products.filter(product => product.type === selectedType);

    return (
        <div>
            <h1>Store</h1>
            <select value={selectedType} onChange={handleTypeChange}>
                <option value="all">All</option>
                <option value="pass">Passes</option>
                <option value="apparel">Apparel</option>
            </select>
            {filteredProducts.map((product) => (
                <div key={product.id}>
                    <h2>{product.product}</h2>
                    <p>Type: {product.type}</p>
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
    );
};

export default Store;