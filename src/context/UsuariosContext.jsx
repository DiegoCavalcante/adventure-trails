import { createContext, useEffect } from "react";
import useFetch from '../hooks/useFetch'
import { useState } from "react";
export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState()
    const [dados, loading] = useFetch("/db.json")
    //setUsuarios(dados.usuarios)
    useEffect(()=>{
        setUsuarios(dados)
        console.log(usuarios)
    },[dados])
    console.log({usuarios})
    return (
        <UsuariosContext.Provider value={{usuarios, setUsuarios}}>
            {children}
        </UsuariosContext.Provider>
        
    )
}

