
const Cart = ({ selectedProducts, removeFromCart, clearCart }) => {
    const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {selectedProducts.map((product) => (
                    <li key={product.id}>
                        {product.product} - ${product.price}
                        <button onClick={() => removeFromCart(product)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total Price: ${totalPrice}</p>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
