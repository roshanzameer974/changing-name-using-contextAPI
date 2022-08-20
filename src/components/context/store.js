import React, {useState, createContext} from "react"

export const GoogleIdContext = createContext();

export const GoogleIdContextProvider = props => {
    const [googleId, setGoogleId] = useState("Enter you text");
    return (
        <GoogleIdContext.Provider value = {[googleId, setGoogleId]}>
            {props.children}
        </GoogleIdContext.Provider>
    )
}