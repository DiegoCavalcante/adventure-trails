import { createContext } from "react";
import useFetch from '../hooks/useFetch'
import { useState } from "react";
export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState()
    const [dados, loading] = useFetch("/db.json")
    //setUsuarios(dados.usuarios)
    console.log(dados)
    return (
        <UsuariosContext.Provider value={dados}>
            {children}
        </UsuariosContext.Provider>
        
    )
}

