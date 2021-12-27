import { createContext, useContext } from 'react';

export const initialState = {
    isPower: true,
    isBank: false,
    displayName: 'Heater Kit',
    sliderVal: 0.3
};

export const reducer = (state, action) => {
    switch(action.type) {
        case 'power':
            return { ...state, isPower: action.value };
        case 'sound':
            return { ...state, isBank: action.value };
        case 'display':
            return { ...state, displayName: action.value };
        case 'slider':
            return { ...state, sliderVal: action.value };
        default:
            return state;
    }
};

export const DrumStateContext = createContext();

export const DrumDispatchContext = createContext();

export const useGlobalState = () => useContext(DrumStateContext);

export const useGlobalDispatch = () => useContext(DrumDispatchContext);
