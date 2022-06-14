import { Link } from "react-router-dom";
const AddBook = ({ handleSearchPage }) => {
	return (
		<Link className="open-search" to="/search">
			<div className="open-search">
				<p className="open-search">Add a book</p>
			</div>
		</Link>
	);
};

export default AddBook;
