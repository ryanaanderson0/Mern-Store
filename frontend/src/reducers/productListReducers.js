//Handles state of the products
//Reducer takes in state and action

import { PRODUCT_LIST_REQUEST,
         PRODUCT_LIST_SUCCESS,
         PRODUCT_LIST_FAIL,
        } from '../constants/productConstants'


//Initializing state to empty products array
export const productListReducer = ( state = { products:[] }, action) => {
    switch(action.type) {
        //return empty products array when making request
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        //return payload when request successful
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        //return error payload when request fails
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}