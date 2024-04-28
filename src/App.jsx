import CardTrilha from './components/CardTrilha'
import useFetch from './hooks/useFetch'
function App() {

  const [dados, loading] = useFetch("/db.json")
  const listaTrilhas = [
    {
      nomeTrilha: 'Trilha da Costa da Lagoa',
      cidade: 'Florianópolis',
      estado: 'SC',
      duracao: 120,
      trajeto: 4,
      dificuldade: 'avançado',
      tipo: 'caminhada / trekking',
      nomeUsuario: 'Diego Cavalcante',
      urlImagem: 'https://images.pexels.com/photos/20216289/pexels-photo-20216289/free-photo-of-panorama-vista-paisagem-pessoas.jpeg'
    },
  ]
  //console.log(dados.usuarios)
  return (
    <>
      { !loading && dados !== null && dados.usuarios.map((item, index) => (
        <CardTrilha dadosTrilha={item} key={index} />
      ))
      }
      
    </>

    
  )
}

export default App
