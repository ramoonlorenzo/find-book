import { AppRoutes } from "./routes";
import { BooksProvider } from "./contexts/booksContext";

export default function App() {
  return;
  <BooksProvider>
    <AppRoutes />
  </BooksProvider>;
}
