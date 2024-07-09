import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";
import { useContext, useEffect, useState } from "react";
import { Book, BooksContext } from "../../contexts/booksContext";

export function BookDetails() {
  const { id } = useParams();
  const { books } = useContext(BooksContext);
  const [book, setBook] = useState<Book | null>();

  useEffect(() => {
    const findBook = books.find((book) => book._id === id);
    setBook(findBook);
  }, [books, id]);

  return (
    <Container>
      <HeaderTitle />
      <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-4 my-6">
        <div>
          <h2 className="text-5xl font-bold  text-evergreen">{book?.title}</h2>
          <p className="text-xl text-gray-500 font-light py-4">
            {book?.authors.join(", ")}
          </p>
          <p className="text-gray-500 mt-6">
            {book?.longDescription
              ? book.longDescription
              : book?.shortDescription}
          </p>
        </div>
        <div>
          <img src={book?.thumbnailUrl} alt="" className="h-full rounded-lg" />
        </div>
      </div>
      <div>
        <Title title="Recomendações com base nesse livro" />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {books.map((book) => {
            return <Card id={book._id} book={book} />;
          })}
        </div>
      </div>
    </Container>
  );
}
