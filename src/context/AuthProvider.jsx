import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage, employees } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // Initialize local storage with employees data if not already set
        const localStorageData = getLocalStorage()
        
        if (!localStorageData || !localStorageData.employees) {
            // If employees data does not exist in local storage, set it
            setLocalStorage({ employees })
        }

        // Fetch the data after setting it if necessary
        const updatedLocalStorageData = getLocalStorage()
        setUserData(updatedLocalStorageData.employees)
    }, [])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
