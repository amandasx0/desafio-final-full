import { Layout } from "../Layout"
import styles from "./style.module.scss"

const Footer = () => {
    return (
        <div className={styles.containerFooter}>
            <Layout noPaddingTopAndBottom>
                <footer>
                    <p>© 2025 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
                </footer>
            </Layout>
        </div>
    )
}

export default Footer