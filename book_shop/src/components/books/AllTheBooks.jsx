import { useEffect, useState } from "react";
import SingleBook from "../card/SingleBook";
import { nanoid } from "nanoid";
import { Container, Row } from "react-bootstrap";
import LoadSpinner from "../loading/LoadSpinner";

const AllTheBooks = ({ searchValue }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://epibooks.onrender.com/");
      const data = await resp.json();
      const firstTenItems = data.slice(0, 10);
      setBooks(firstTenItems);
      setLoading(false)
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  useEffect(() => {
    if (searchValue !== "") {
      const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchValue.toLowerCase())
      });
      setFilteredBooks(filteredBooks);
    } else 
      setFilteredBooks([]);
  },[searchValue, books]);

  const booksByMap = filteredBooks.length > 0 ? filteredBooks : books;

  return (
    <Container>
      <Row className="gap-3 justify-content-center my-3">
        {error && <div>Ops, something went wrong...</div>}
        {loading && !error && <LoadSpinner />}
        {!loading && !error && booksByMap.map((book) => {
          return (
            <SingleBook
              key={nanoid()}
              img={book.img}
              category={book.category}
              price={book.price}
              title={book.title}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;