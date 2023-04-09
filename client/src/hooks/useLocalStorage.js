import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
        const [state, setState] = useState(() => {
            const persistedStateSerializde = localStorage.getItem(key);
            if(persistedStateSerializde){
                const persistedState = JSON.parse(persistedStateSerializde);

                return persistedState;
            }

            return initialValue;
        });

        const setLocalStorageState = (value) => {
            setState(value);
            //check if the value is function

            localStorage.setItem(key, JSON.stringify(value));
        }
        return [
            state,
            setLocalStorageState
        ];
};