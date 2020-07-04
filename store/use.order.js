import React, { useState } from 'react';

export default function useOrder() {
    const [current, setOrder] = useState({});
    const set = (data) => setOrder(data);
    const reset = () => setOrder({});
    return {
        current,
        set,
        reset,
    };
}
