import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// our global state will get a key called books
// the value will be the return from the BooksReducer
// which is an array of object (books)
// all components in the app will rerender when state is updated
// through a reducer
// any key we add here we get added to global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
