import ImageBanner from "../../assets/banner.png"
import ArrowRight from "../../assets/arrow.png"
import Button from "../Button"

import styles from "./style.module.scss"

const HeroBanner = () => {
    return (
        <section className={styles.containerHeroBanner}>
            <div className={styles.boxHeroBanner}>
                <h1>Projetos Sociais que transformam</h1>
                <p className={styles.description}>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
                <Button background="orange" borderRadius>Cadastrar empresa <img src={ArrowRight} alt="Seta pra direita" /></Button>

                <section className={styles.boxInfos}>
                    <div>
                        <h5>500+</h5>
                        <p>Empresas Voluntárias</p>
                    </div>
                    <div>
                        <h5>1.2k+</h5>
                        <p>Projetos realizados</p>
                    </div>
                    <div>
                        <h5>50k+</h5>
                        <p>Vidas Impactadas</p>
                    </div>
                </section>
            </div>
            <img src={ImageBanner} alt="Imagem do banner da Home" className={styles.imageBanner}/>
        </section>
    )
        
}

export default HeroBanner