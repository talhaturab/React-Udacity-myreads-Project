const ShowBook = ({ book, onUpdateCategory, shelfBooks }) => {
	const handleUpdateCategory = (event, book) => {
		event.preventDefault();
		onUpdateCategory(book, event.target.value);
	};

	const shelfValue = () => {
		if (book.shelf) {
			return book.shelf;
		} else {
			const existBook = shelfBooks.filter(
				(shelfBook) => shelfBook.id === book.id
			);
			if (existBook.length > 0) {
				return existBook[0].shelf;
			} else {
				return "none";
			}
		}
	};

	return (
		<li key={book.id}>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: book.imageLinks
								? `url(${book.imageLinks.thumbnail})`
								: "none",
						}}
					></div>
					<div className="book-shelf-changer">
						<select
							value={shelfValue()}
							onChange={(event) =>
								handleUpdateCategory(event, book)
							}
						>
							<option value="move" disabled>
								Move to...
							</option>
							<option value="currentlyReading">
								Currently Reading
							</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				{book.authors &&
					book.authors.map((author, index) => (
						<div key={index} className="book-authors">
							{author}
						</div>
					))}
			</div>
		</li>
	);
};

export default ShowBook;
