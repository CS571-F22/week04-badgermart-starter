import React, { useState } from 'react';

export default function ShoppingCart() {

    const [myCart, setMyCart] = useState({
        apples: 0,
        bananas: 0,
        coconuts: 0,
    });

    const addApple = () => {
        alert("I have taken an apple!");
    }

    const addBanana = () => {
        alert("I have taken a banana!");
    }

    const addCoconut = () => {
        alert("I have taken a coconut!");
    }

    return <>
        <h2>Shopping Cart</h2>
        <ul>
            <li>apples: {myCart.apples}</li>
            <li>bananas: {myCart.bananas}</li>
            <li>coconuts: {myCart.coconuts}</li>
        </ul>
        <button onClick={addApple}>Add Apple</button>
        <button onClick={addBanana}>Add Banana</button>
        <button onClick={addCoconut}>Add Coconut</button>
    </>
}
