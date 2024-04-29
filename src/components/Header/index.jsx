import { Link } from 'react-router-dom'
import styles from './style.module.css'

function Header(){
    
    return (
        <div className={styles.container}>            
            <nav>
                <Link to='/'>Adventure Trails</Link>
                <Link to='/cadastro'>Cadastro</Link>
                <Link to='/lista-trilhas'>Explorar Trilhas</Link>
                
            </nav>
        </div>
    )
}

export default Header