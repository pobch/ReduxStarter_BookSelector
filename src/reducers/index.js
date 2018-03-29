import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import AciveBook from './reducer_active_book'


const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: AciveBook
});

export default rootReducer;
