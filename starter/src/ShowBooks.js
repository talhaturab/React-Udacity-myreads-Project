import ShowBook from "./ShowBook";
import AddBook from "./AddBook";

const bookCategories = [
	{ title: "Currently Reading", name: "currentlyReading" },
	{ title: "Want To Read", name: "wantToRead" },
	{ title: "Read", name: "read" },
];

const ShowBooks = ({ books, onUpdateCategory, updateSearchPage }) => {
	return (
		<div className="app">
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{bookCategories.map((category, index) => (
							<div key={index} className="bookshelf">
								<h2 className="bookshelf-title">
									{category.title}
								</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{books
											.filter(
												(book) =>
													book.shelf === category.name
											)
											.map((book) => (
												<ShowBook
													key={book.id}
													book={book}
													onUpdateCategory={
														onUpdateCategory
													}
												/>
											))}
									</ol>
								</div>
							</div>
						))}
					</div>
				</div>
				<AddBook />
			</div>
		</div>
	);
};

export default ShowBooks;
