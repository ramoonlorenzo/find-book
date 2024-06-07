import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import { useCallback, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";

const genderBooks = [
  "Ação",
  "Aventura",
  "Biografia",
  "Comédia",
  "Drama",
  "Ficção",
];

export function Home() {
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const handleSelect = useCallback(
    (title: string) => {
      if (selectedGender.includes(title)) {
        const filteredGender = selectedGender.filter((i) => i !== title);
        setSelectedGender(filteredGender);
      } else {
        setSelectedGender([...selectedGender, title]);
      }
    },
    [selectedGender]
  );

  return (
    <div className="mb-6">
      <Header />
      <Container>
        <Title title="O que você quer ler hoje?" />
        <div className="gap-8 grid md:grid-cols-8 my-6 grid-cols-4">
          {genderBooks.map((e, idx) => (
            <Button
              key={idx}
              title={e}
              variant={selectedGender.includes(e) ? "dark" : "light"}
              onClick={() => handleSelect(e)}
            />
          ))}
        </div>
        <div className="py-7">
          <p className="text-evergreen font-semibold text-2xl">
            Sobre o que você gostaria de receber uma recomendação de livro?
          </p>
          <Input placeholder="Eu gostaria de ler..." />
        </div>
        <Title title="Livros recomendados" />
        <Card id="1" />
      </Container>
    </div>
  );
}
