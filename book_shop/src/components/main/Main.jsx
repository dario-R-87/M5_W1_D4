import { useEffect, useState } from "react";
import Card from "../card/Card"

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
                return <Card />
           })}
        </div>
   );
}

export default Main;