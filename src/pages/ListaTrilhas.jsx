import useFetch from '../hooks/useFetch'
import CardTrilha from '../components/CardTrilha'

function ListaUsuarios(){
    const [dados, loading] = useFetch("/db.json")
    return (
        <div>
             <h1>Lista Trilhas</h1>
        { !loading && dados !== null && dados.usuarios.map((item, index) => (
            <CardTrilha dadosTrilha={item} key={index} />
          ))
        }
        </div>
       
    )
}

export default ListaUsuarios