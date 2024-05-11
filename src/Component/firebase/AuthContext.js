// AuthContext.js
import React, { createContext, useContext, useState, useEffect, } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // useNavigate hook from react-router
    const location = useLocation();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleUserNavigation = () => {
        if (user) {
            navigate('/receipt'); // Redirect to Receipt if user is logged in
        } else {
            navigate('/login', { state: { from: location.pathname } }); // Redirect to Login if user is not logged in
        }
    };

    return (
        <AuthContext.Provider value={{ user, handleUserNavigation }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
