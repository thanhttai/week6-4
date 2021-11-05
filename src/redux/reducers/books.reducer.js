import * as types from "../constants/books.constants";
const initialState = {
  books: [],
  loading: false,
  readingList: [],
  selectedBook: null,
  singleBook: null,
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS_REQUEST:
      return { ...state, loading: true };
    case types.GET_BOOKS_SUCCESS:
      return { ...state, books: payload, loading: false };
    case types.GET_BOOKS_FAILURE:
      return { ...state, loading: false };
      case types.GET_BOOKS_SUCCESS_SINGLE:
      return { ...state, singleBook: payload, loading: false };
      case types.GET_BOOKS_SUCCESS_FAVORITES:
        return { ...state, readingList: payload, loading: false };
    default:
      return state;
  }
};

export default booksReducer;