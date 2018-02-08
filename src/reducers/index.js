import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// our global state will get a key called books
// the value will be the return from the BooksReducer
// which is an array of object (books)
// all components in the app will rerender when state is updated
// through a reducer
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
