import Card from "../Card";
import SectionBlock from "../SectionBlock";
import { Layout } from "../Layout";
import Image1 from "../../assets/mutirao-reciclagem.png";
import Image2 from "../../assets/aulas-tecnologia.png";
import Image3 from "../../assets/esporte-inclusao.png";

const VoluntaryComp = () => {
  const items = [
    {
      image: Image1,
      altImage: "Imagem do multirão da reciclagem",
      title: "Mutirão de reciclagem",
      description:
        "Coletar materiais recicláveis e orientar sobre descarte consciente.",
    },
    {
      image: Image2,
      altImage: "Imagem de aula de tecnologia",
      title: "Aulas de Tecnologia",
      description:
        "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
    },
    {
      image: Image3,
      altImage: "Imagem de esporte e inclusão",
      title: "Esporte e Inclusão",
      description:
        "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.",
    },
  ];

  return (
    <>
      <Layout>
        <section>
          <SectionBlock
            title="Voluntariado"
            items={items}
            buttonLabel="Quero participar"
          />
        </section>
      </Layout>
    </>
  );
};

export default VoluntaryComp;
