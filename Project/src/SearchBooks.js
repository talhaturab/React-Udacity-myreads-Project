import { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import ShowBook from "./ShowBook";
import { Link } from "react-router-dom";

const SearchBooks = ({ onHandleSearch, onUpdateCategory, shelfBooks }) => {
	const [books, setBooks] = useState([]);

	const handleQuery = async (event) => {
		const res =
			event.target.value === ""
				? []
				: await BooksAPI.search(event.target.value, 20);
		if (res.error) {
			setBooks([]);
		} else {
			setBooks(res);
		}
	};

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/">
					<button className="close-search">Close</button>
				</Link>
				<div className="search-books-input-wrapper">
					<input
						onChange={handleQuery}
						type="text"
						placeholder="Search by title, author, or ISBN"
					/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{books.map((book) => (
						<ShowBook
                            key={book.id}
							book={book}
							onUpdateCategory={onUpdateCategory}
							shelfBooks={shelfBooks}
						/>
					))}
				</ol>
			</div>
		</div>
	);
};

export default SearchBooks;
