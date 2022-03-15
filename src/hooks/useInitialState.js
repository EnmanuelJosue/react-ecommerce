import {useState} from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (payload) => {
        setState({
            ...state, // Mantengo el valor que hay en el state
            cart: [...state.cart, payload] // Mantengo el valor del state.cart, y le añado el que venga en payload
        });
    }

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((product, index) => index != indexValue),
        });
    }
    return{
        state,
        addToCart,
        removeFromCart
    }
}
export default useInitialState;