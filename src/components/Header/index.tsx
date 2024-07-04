import styles from './styles.module.scss'

import iginiteLogo from '../../assets/Ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>

            <img src={iginiteLogo} alt="Logotipo do Ignite" />
            <strong>
                Ignite Feed
            </strong>
        </header>
    )
}