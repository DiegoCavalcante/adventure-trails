import { Link } from 'react-router-dom'
import styles from './style.module.css'

function Header(){
    
    return (
        <div className={styles.container}>            
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/cadastro'>Cadastro</Link>
                
            </nav>
        </div>
    )
}

export default Header