import { useEffect, useState } from 'react'

export const useFetch = (url, options, renderOnChange = []) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                setResponse(response);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, renderOnChange);

    return { response, error };
};



