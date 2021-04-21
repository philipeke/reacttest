import React, { useState, createContext } from 'react'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: { children?: React.ReactChild }) => {
    const [auhtenticatedUser, setAuthenticatedUser] = useState()


    return (
        <UserContext.Provider value={[auhtenticatedUser, setAuthenticatedUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
