import { useEffect, useState } from "react"

function useFetch(url) {
    const [dados, setDados] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then((res) => res.json())
        .then((data) => {  
                       
            setDados(data);
        })
        .catch((err) => {
            window.alert('Erro')
            console.log(err)
        })
        .finally(()=> setLoading(false));
    }, [url]);
    
    return [dados, loading];
}

export default useFetch