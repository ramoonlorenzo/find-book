import { Router } from "express";
import { BooksController } from "../../app/controllers/books.controller";
import { routerAdapter } from "./routerAdapter";
import { BooksUseCase } from "../../app/useCase/books.usecase";
import { BooksRepositoryMongoose } from "../repository/books.repository";

export const BooksRoutes = (router: Router) => {
  const booksUseCase = new BooksUseCase(new BooksRepositoryMongoose());
  const booksController = new BooksController(booksUseCase);
  router.post("/books", routerAdapter(booksController, "create"));
  router.get("/books", routerAdapter(booksController, "find"));
  router.put("/books/:id", routerAdapter(booksController, "update"));
};
