import { useEffect, useState } from "react";
import BookCard from "../card/BookCard"

const Main = () => {

    const [books, setBooks] = useState([]);

    const getData = async () => {
        try {
            const resp = await fetch("https://epibooks.onrender.com/?limit=10");
            const data = await resp.json();
            const firstTenItems = data.slice(0, 10);
            setBooks(firstTenItems);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    console.log(books);

    return(
        <div>
           {books.map((book)=>{
                return <BookCard 
                    img={book.img}
                    category={book.category}
                    price={book.price}
                    title={book.title}
                />
           })}
        </div>
   );
}

export default Main;