import AllTheBooks from "../books/AllTheBooks";
import BooksFiltered from "../books/BooksFiltered";

const Main = ({searchValue}) => {

  return (
    <>
      {searchValue==="" && <AllTheBooks />}
      {searchValue!=="" && <BooksFiltered  searchValue={searchValue}/>}
    </>
  );
};

export default Main;
