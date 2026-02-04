import SectionBlock from "../SectionBlock";
import { Layout } from "../Layout";
import Image1 from "../../assets/mentoria-carreira-emprego.png";
import Image2 from "../../assets/compartilhe-experiencia.png";
import Image3 from "../../assets/acompanhamento.png";

const MentoringComp = () => {
  const items = [
    {
      image: Image1,
      altImage: "Imagem de melhoria de carreira",
      title: "Mentoria de Carreira e Emprego",
      description:
        "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.",
    },
    {
      image: Image2,
      altImage: "Imagem de compartilhamento de experiência",
      title: "Compartilhe Experiência",
      description:
        "Oriente jovens e profissionais iniciantes em sua área.",
    },
    {
      image: Image3,
      altImage: "Imagem de acompanhamento",
      title: "Acompanhamento",
      description:
        "Participe como guia em jornadas de aprendizado e desenvolvimento.",
    },
  ];

  return (
    <>
      <Layout>
        <section>
           <SectionBlock
            title="Mentoria"
            items={items}
            buttonLabel="Quero participar"
          />
        </section>
      </Layout>
    </>
  );
};

export default MentoringComp;
