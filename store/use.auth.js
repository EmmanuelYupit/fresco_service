import React, { useState } from 'react';

export default function useAuth() {
    const [token, setToken] = useState('');
    const set = (token) => setToken(token);
    const reset = () => setToken('');
    return {
        token,
        set,
        reset,
    };
}
