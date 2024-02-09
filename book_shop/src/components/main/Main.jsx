import { useEffect, useState } from "react";

const Main = () => {

    const [books, setBooks] = useState([]);

    const getData = async () => {
        try {
            const resp = await fetch("https://epibooks.onrender.com/");
            const data = resp.json();
            setBooks(data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    console.log(books);

    return(
        <div>ciao</div>
   );
}

export default Main;