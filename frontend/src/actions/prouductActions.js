import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_ITEM_REQUEST,
  PRODUCT_ITEM_SUCCESS,
  PRODUCT_ITEM_FAIL,
} from "../constants/productConstants";

//PRODUCT LIST DISPATCH ACTION
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/product");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//PRODUCT ITEM DISPATCH ACTION
export const listProductItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_ITEM_REQUEST });

    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({
      type: PRODUCT_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
