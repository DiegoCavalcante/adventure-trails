import {UsuariosContext} from '../context/UsuariosContext'
import CardTrilha from '../components/CardTrilha'
import { useContext } from 'react'
function ListaUsuarios(){
    const {usuarios, setUsuarios, loading} =  useContext(UsuariosContext)
    return (
        
        <div>
            
             <h1>Lista Trilhas</h1>
             
        { !loading && usuarios !== null && usuarios.map((item, index) => (
            <CardTrilha dadosTrilha={item} key={index} />
          ))
        }
        </div>
       
    )
}

export default ListaUsuarios