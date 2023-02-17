import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import db from "../lib/config/firebase";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    const [userDetails, setUserDetails] = useState(null);
    
    useEffect(() => {
        const getUserDetails = () => {
            const unsubscribe = onSnapshot(doc(db, 'users', currentUser.uid), (doc) => {
                setUserDetails(doc.data());
            });

            return () => {
                unsubscribe();
            };
        }

        currentUser?.uid && getUserDetails();
    }, [currentUser?.uid]);

    return (
        <UserContext.Provider value={{ userDetails }}>
            { children }
        </UserContext.Provider>
    );
};