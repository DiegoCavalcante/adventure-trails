import * as PropTypes from 'prop-types'

function CardTrilha({dadosTrilha}){
    return(
        <>
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
            <img width='200' src={dadosTrilha.urlImagem} alt="" />
        </>
        
    )
}




export default CardTrilha