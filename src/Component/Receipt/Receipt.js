import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext'; // Adjust path as necessary

export default function Receipt() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const handleReceiptNavigation = () => {
        if (isLoggedIn) {
            navigate('/receipt');
        } else {
            navigate('/login');
        }
    };

    return (
        <button onClick={handleReceiptNavigation}>
            Go to Receipt
        </button>
    );
}
