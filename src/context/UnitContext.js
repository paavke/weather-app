import React, { createContext, useState } from 'react';

export const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
    const [unit, setUnit] = useState('C');

    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
    };

    return (
        <UnitContext.Provider value={{ unit, toggleUnit }}>
            {children}
        </UnitContext.Provider>
    );
};
