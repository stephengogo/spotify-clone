import React, {createContext, useContext, useReducer} from "react"

export const DataLayerContext = createContext();

// via props we use i.s. reducer and children which is the app 
export const DataLayer = ({initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);