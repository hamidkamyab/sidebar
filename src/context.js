import React, { useState } from 'react'
import { useContext } from 'react';


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const openSidebar = () => {
        setShowSidebar(true)
    }
    const closeSidebar = () => {
        setShowSidebar(false)
    }


    return <AppContext.Provider value={{showSidebar,openSidebar,closeSidebar}} >{children}</AppContext.Provider>
}

const useGetContext = () => {
    return useContext(AppContext);
}


export { useGetContext, AppContext, AppProvider };