import { createContext, useContext, useState, useEffect } from 'react';
import axiosClient from "../../components/axiosClient/axiosClient";

const ShoppingContext = createContext({});

export const useShoppingContext = () => {
    return useContext(ShoppingContext);
};

export const ShoppingContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const jsonCartData = localStorage.getItem('shopping_cart');
        return jsonCartData ? JSON.parse(jsonCartData) : [];
    });

    const [cartFavorites, setcartFavorite] = useState(() => {
        const jsonFavorite = localStorage.getItem('shopping_cartfavorite');
        return jsonFavorite ? JSON.parse(jsonFavorite) : [];
    });

    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(()=>{
        localStorage.setItem('shopping_cartfavorite', JSON.stringify(cartFavorites));
    },[cartFavorites])

    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const increaseQty = (id) => {
        console.log("increaseQty => ", id);
        const currentCartItem = cartItems.find(item => item.id === id);
        if (currentCartItem) {
            const newItems = cartItems.map(item => {
                if (item.id === id) {
                    return { ...item, qty: item.qty + 1 };
                } else {
                    return item;
                }
            });
            setCartItems(newItems);
        }
    };

    const decreaseQty = (id) => {
        console.log("decreaseQty => ", id);
        const currentCartItem = cartItems.find(item => item.id === id);
        if (currentCartItem) {
            if (currentCartItem.qty === 1) {
                removeCartItem(id);
            } else {
                const newItems = cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, qty: item.qty - 1 };
                    } else {
                        return item;
                    }
                });
                setCartItems(newItems);
            }
        }
    };

    const addFavotiteItem = (product) => {
        console.log("product=> ", product);
            if (product) {
                const currentCartItem = cartFavorites.find(item => item.id === product.id);
                if (currentCartItem) {
                   removeCartFavoriteItem(product.id)
                } else {
                    const newItem = { ...product };
                    setcartFavorite([...cartFavorites, newItem]);
                }
            }
        }

    const addCartItem = (product) => {
        console.log("product=> ", {...product});
        if (product) {
            const currentCartItem = cartItems.find(item => item.id === product.id);
            if (currentCartItem) {
                const newItems = cartItems.map(item => {
                    if (item.id === product.id) {
                        return { ...item, qty: item.qty + 1 };
                    } else {
                        return item;
                    }
                });
                setCartItems(newItems);
            } else {
                const newItem = { ...product, qty: 1 };
                setCartItems([...cartItems, newItem]);
            }
        }
    };

    const removeCartItem = (id) => {
        console.log("removeCartItem => ", id);
        const currentCartItemIndex = cartItems.findIndex(item => item.id === id);
        const newItems = [...cartItems];
        newItems.splice(currentCartItemIndex, 1);
        setCartItems(newItems);
    };

    const removeCartFavoriteItem = (id) => {
        console.log("removeCartFavoriteItem => ", id);
        const currentCartItemIndex = cartFavorites.findIndex(item => item.id === id);
        const newItems = [...cartItems];
        newItems.splice(currentCartItemIndex, 1);
        setcartFavorite(newItems);
    };

    const clearCart = () => {
        console.log("clearCart => ");
        setCartItems([]);
    };

    return (
        <ShoppingContext.Provider value={{ cartItems,cartFavorites, cartQty, totalPrice, increaseQty, decreaseQty, addCartItem, removeCartItem, clearCart,addFavotiteItem }}>
            {children}
        </ShoppingContext.Provider>
    );
};