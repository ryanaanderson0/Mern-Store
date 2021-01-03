//Handles state of the products
//Reducer takes in state and action

import { PRODUCT_LIST_REQUEST,
         PRODUCT_LIST_SUCCESS,
         PRODUCT_LIST_FAIL,
         PRODUCT_ITEM_REQUEST,
         PRODUCT_ITEM_SUCCESS,
         PRODUCT_ITEM_FAIL,
        } from '../constants/productConstants'

//PRODUCT LIST REDUCER~~
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

//PRODUCT ITEM REDUCER~~
export const productItemReducer = ( state = { product: { reviews: [] }} , action) => {
    switch(action.type) {
        //call current state when making request
        case PRODUCT_ITEM_REQUEST:
            return { loading: true, ...state}
        //return payload when request successful
        case PRODUCT_ITEM_SUCCESS:
            return { loading: false, product: action.payload }
        //return error payload when request fails
        case PRODUCT_ITEM_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}