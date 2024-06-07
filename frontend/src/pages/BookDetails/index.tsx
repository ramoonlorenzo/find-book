import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";

export function BookDetails() {
  const { id } = useParams();

  return (
    <Container>
      <HeaderTitle />
      <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-4 my-6">
        <div>
          <h2 className="text-5xl font-bold  text-evergreen">Nome do livro</h2>
          <p className="text-xl text-gray-500 font-light py-4">Autor</p>
          <p className="text-gray-500 mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            fugiat repellendus quam necessitatibus quos magnam velit adipisci
            nam cumque corporis error autem excepturi exercitationem nisi
            ratione cupiditate dignissimos, nesciunt atque?
          </p>
        </div>
        <div>
          <img
            src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg"
            alt=""
            className="h-full rounded-lg"
          />
        </div>
      </div>
      <div>
        <Title title="Recomendações com base nesse livro" />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <Card id="1" />
          <Card id="1" />
          <Card id="1" />
          <Card id="1" />
          <Card id="1" />
          <Card id="1" />
        </div>
      </div>
    </Container>
  );
}
