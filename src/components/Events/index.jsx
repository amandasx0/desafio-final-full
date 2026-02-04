import SectionBlock from "../SectionBlock";
import { Layout } from "../Layout";
import Image1 from "../../assets/empoderando-jovens-futuro.png";
import Image2 from "../../assets/tecnologia-que-transforma.png";
import Image3 from "../../assets/carreira-primeiro-emprego.png";

const EventsComp = () => {
  const items = [
    {
      image: Image1,
      altImage: "Imagem de empoderamento de jovens",
      title: "Empoderando Jovens para o Futuro",
      description:
        "Atividade: Palestra motivacional sobre liderança jovem e transformação social. \n\nImpacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.",
    },
    {
      image: Image2,
      altImage: "Imagem de jovens no computador",
      title: "Tecnologia que Transforma",
      description:
        "Atividade: Workshop de introdução à programação e inovação digital. \n\nImpacto: Preparar jovens para o mercado de trabalho através da tecnologia.",
    },
    {
      image: Image3,
      altImage: "Imagem de apresentação de emprego",
      title: "Carreira e Primeiro Emprego",
      description:
        "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado. \n\nImpacto: Ajudar jovens a conquistar oportunidades de trabalho.",
    },
  ];

  return (
    <>
      <Layout>
        <section>
           <SectionBlock
            title="Eventos & Palestras"
            items={items}
            buttonLabel="Quero participar"
          />
        </section>
      </Layout>
    </>
  );
};

export default EventsComp;
