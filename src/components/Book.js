import React from "react";
import books from "../data/book.json";

class Book extends React.Component {
  state = {
    searchTerm: ""
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };
  render() {
    let filteredBooks = books.filter((article) =>
      article.title.toLowerCase().includes(this.state.searchTerm)
    );
    return (
      <div className="page">
        <input
          placeholder="Search"
          className="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <ul className="archive">
          {filteredBooks.map((book) => (
            <Books {...book} />
          ))}
        </ul>
      </div>
    );
  }
}

function Books(props) {
  return (
    <li className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        Author:<span>{props.author}</span>
      </p>
      <a href={props.website}>
        <button>Buy Now</button>
      </a>
    </li>
  );
}

export default Book;
