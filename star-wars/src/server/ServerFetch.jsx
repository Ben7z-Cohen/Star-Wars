import { useEffect, useState } from './node_modules/react'

export const useFetch = (url, options, renderOnChange = []) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                setResponse(res);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, renderOnChange);

    return { response, error };
};



