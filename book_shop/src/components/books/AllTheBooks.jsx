import { useEffect, useState } from "react";
import SingleBook from "../card/SingleBook";
import { nanoid } from "nanoid";
import { Container, Row } from "react-bootstrap";

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch("https://epibooks.onrender.com/?limit=10");
      const data = await resp.json();
      const firstTenItems = data.slice(0, 10);
      setBooks(firstTenItems);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(books);
  return (
    <Container>
      <Row className="gap-3 justify-content-center my-3">
        {books.map((book) => {
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