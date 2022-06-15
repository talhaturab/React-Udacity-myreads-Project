import "./App.css";
import { useState, useEffect } from "react";
import AddBook from "./AddBook";
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";
import ShowBooks from "./ShowBooks";
import { Route, Routes } from "react-router-dom";

function App() {
	const [books, setBooks] = useState([]);

	const updateCategory = (book, shelf) => {
		const update = async () => {
			await BooksAPI.update(book, shelf);
			const updatedBooks = await BooksAPI.getAll();
			setBooks(updatedBooks);
		};

		update();
	};

	useEffect(() => {
		const getBooks = async () => {
			const res = await BooksAPI.getAll();
			setBooks(res);
		};

		getBooks();
	}, []);

	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<ShowBooks
						books={books}
						onUpdateCategory={updateCategory}
					/>
				}
			/>
			<Route
				exact
				path="/search"
				element={
					<SearchBooks
						onUpdateCategory={updateCategory}
						shelfBooks={books}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
