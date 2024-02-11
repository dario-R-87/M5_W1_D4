import { useEffect, useState } from "react";
import BookCard from "../card/BookCard";
import { nanoid } from "nanoid";
import { Container, Row } from "react-bootstrap";

const Main = () => {
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
            <BookCard
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

export default Main;
