import './app.css'
import Form from "./frontPage/form";
import Cards from './frontPage/cards'
import { useState } from 'react';

function App() {
    const [allBooks, setAllBooks] = useState([])
    const addBook = (book) => {
        setAllBooks([...allBooks, book])
    }
    return (
    <div>
        < Form addBook={addBook}/>
        < Cards allBooks={allBooks}/>
    </div>
    )
}

export default App