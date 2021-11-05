import { toast } from "react-toastify";
import api from "../../apiService";
import * as types from "../constants/books.constants"
  

const bookActions = {}

bookActions.getAllBooks = ({pageNum, limit, query}) => {
    return async (dispatch) => {
        //fetch api in here
        try {
            dispatch({ type: types.GET_BOOKS_REQUEST, payload: null})

            let url = `/books?_page=${pageNum}&_limit=${limit}`;
            if (query) url += `&q=${query}`;
            const res = await api.get(url);
           
            dispatch({ type: types.GET_BOOKS_SUCCESS, payload: res.data})

        } catch (err) {
            console.log(err);
            dispatch({ type: types.GET_BOOKS_FAILURE, payload: err})
        }
    }
}
bookActions.getSingleBook = ({bookId}) => {

  return async (dispatch) => {
    dispatch({ type: types.GET_BOOKS_REQUEST, payload: null})
    try {
      const res = await api.get(`/books/${bookId}`);
        dispatch({ type: types.GET_BOOKS_SUCCESS_SINGLE, payload: res.data})

    } catch (error) {
      
      dispatch({ type: types.GET_BOOKS_FAILURE})
    }
  }
} 
bookActions.addFavorites = ({addingBook}) => {
  return async (dispatch) => {
    dispatch({ type: types.GET_BOOKS_REQUEST, payload: null})
    try {
      const res = await api.post(`/favorites`, addingBook);
      toast.success("The book has been added to the reading list!");
        dispatch({ type: types.GET_BOOKS_SUCCESS_FAVORITES, payload: res.data})
    } catch (error) {
      
      dispatch({ type: types.GET_BOOKS_FAILURE})
    }
  }
} 


export default bookActions

