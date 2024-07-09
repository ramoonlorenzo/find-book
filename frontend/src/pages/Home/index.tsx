import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import { useCallback, useContext, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { searchBook } from "../../services/books";
import { BooksContext } from "../../contexts/booksContext";

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

  const { books, handleSetBooks } = useContext(BooksContext);

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

  const handleSubmit = useCallback(
    async (value: string) => {
      const response = await searchBook(value);
      console.log("🚀 ~ handleSubmit ~ response:", response);
      handleSetBooks(response);
    },
    [handleSetBooks]
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
          <Input
            placeholder="Eu gostaria de ler..."
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                handleSubmit(e.target.value);
              }
            }}
          />
        </div>
        <Title title="Livros recomendados" />
        <div className="grid md:grid-cols-3 gap-4">
          {books.map((book) => {
            return <Card id={book._id} book={book} />;
          })}
        </div>
      </Container>
    </div>
  );
}
