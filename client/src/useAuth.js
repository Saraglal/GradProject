// useAuth.js

import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve the stored JWT token from the client-side storage
        const token = localStorage.getItem('token');

        if (token) {
            try {
                // Verify the token's validity and extract user information
                const decodedToken = jwt.verify(token, 'SECRET_KEY');
                setUser(decodedToken);
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Error verifying token:', error);
                setUser(null);
                setIsAuthenticated(false);
            }
        } else {
            setUser(null);
            setIsAuthenticated(false);
        }
    }, []);

    return { isAuthenticated, user };
};

export default useAuth;
