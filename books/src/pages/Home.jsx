import BookList from '../components/BooksList'
import data from '../data';


const Home = () => {
    return (
       <>
        <BookList books={data}/>
        </>
    );
}
 
export default Home;