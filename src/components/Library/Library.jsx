import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteBook} from '../../redux/Slices/bookSlice';

const Library = () => {

    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);

    function handleDeleteBook(id) {
      dispatch(deleteBook({id}))
    }

    const booksList = books && books.map(book => (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.rating}</td>
            <td>
                <button onClick={() => handleDeleteBook(book.id)} className='delete'>x</button>
            </td>
        </tr>
    ))

    return (
        <div className='library'>
            <h2>Library</h2>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Rating</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {booksList}
                </tbody>
            </table>
        </div>
    );
};

export default Library;