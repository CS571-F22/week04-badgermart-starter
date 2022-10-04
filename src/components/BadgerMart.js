import React from 'react';
import GroceryAisle from './GroceryAisle';
import ShoppingCart from './ShoppingCart';

export default function BadgerMart() {
    return <>
        <h1>Welcome to BadgerMart!</h1>
        <GroceryAisle/>
        <ShoppingCart/>
        <ShoppingCart/>
        <ShoppingCart/>
    </>
}
