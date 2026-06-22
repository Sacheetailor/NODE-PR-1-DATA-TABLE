import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controller/BookController.js";
import { bookValidator } from "../middlewares/authmiddleware.js";

const BookRoutes = Router();

BookRoutes.post("/", bookValidator,createBook);
BookRoutes.get("/", getAllBooks);
BookRoutes.get("/:id", getBookById);
BookRoutes.put("/:id", updateBook);
BookRoutes.delete("/:id", deleteBook);

export default BookRoutes;