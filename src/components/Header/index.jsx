import styles from './style.module.css'

function Header(){
    return (
        <div className={styles.container}>
            
            <nav>
                <ul>
                    <li><a  href="">Adventure Trails</a></li>
                    <li><a href="">Explorar Trilhas</a></li>   
                    <li><a href="">Cadastrar Trilhas</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header