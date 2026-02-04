import SectionBlock from "../SectionBlock";
import { Layout } from "../Layout";
import Image1 from "../../assets/instituto-grande-familia.png";
import Image2 from "../../assets/projeto-futuro-escola..png";
import Image3 from "../../assets/instituto-conecta-jovem..png";

const DonatesComp = () => {
  const items = [
    {
      image: Image1,
      altImage: "Imagem de ajudante",
      title: "Instituto grande familia",
      description:
        "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
    },
    {
      image: Image2,
      altImage: "Imagem de livro escolar",
      title: "Projeto Futuro na Escola",
      description:
        "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.",
    },
    {
      image: Image3,
      altImage: "Imagem de computador",
      title: "Instituto Conecta Jovem",
      description:
        "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.",
    },
  ];

  return (
    <>
      <Layout>
        <section>
           <SectionBlock
            title="Doação"
            items={items}
            buttonLabel="Quero doar"
          />
        </section>
      </Layout>
    </>
  );
};

export default DonatesComp;
