import backgroundImage from "../../assets/images/background-header.png";
import { Container } from "../Container/Container";
import { HeaderTitle } from "./HeaderTitle";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="w-auto bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <HeaderTitle />
        <div className="mt-28">
          <p className="md:text-6xl text-3xl font-bold text-evergreen">
            Encontre livros <br /> que sejam a sua cara!
          </p>
          <p className="text-gray-500 my-5 text-xl md:text-2xl text-1xl">
            Lorem ipsum.
          </p>
          <Button title="Pesquisar livros" />
        </div>
      </Container>
    </header>
  );
}
