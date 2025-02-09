const defaultState = {
    items: [],
}

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_INFO_PRODUCT = 'SET_INFO_PRODUCT';
const GET_ITEMS = 'GET_ITEMS';
const SET_INFO_PRODUCT2 = 'SET_INFO_PRODUCT2';
const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
const FILTERED_ITEMS = 'FILTERED_ITEMS';
const SELECT_ITEM = 'SELECT_ITEM';
const ADD_USER = 'ADD_USER'
const GET_USERS = 'GET_USERS'
const REMOVE_USER = 'REMOVE_USER'
const SELECT_ITEM2 = 'SELECT_ITEM2';
const REMOVE_ITEM = 'REMOVE_ITEM'
const REMOVE_ITEM2 = 'REMOVE_ITEM2'

export const planetsReducer = (state = defaultState, action) => {
  switch (action.type) {
      case ADD_PRODUCT:
          return { ...state, smartphonesArr: [...state.smartphonesArr, action.payload] };
      case REMOVE_PRODUCT:
          return {
              ...state,
              smartphonesArr: state.smartphonesArr.filter(
                  smartphone => String(smartphone.id) !== String(action.payload.id)
              )
          };
      case SET_PRODUCTS:
          return { ...state, smartphonesArr: [...state.smartphonesArr, ...action.payload] };
      case SET_INFO_PRODUCT:
          return { ...state, infoProduct: action.payload };
      case GET_ITEMS: 
          return{...state, items: [...state.items,...action.payload]};
      case SET_INFO_PRODUCT2:
          return { ...state, infoProduct2: action.payload };
      case SEARCH_PRODUCT:
          return { ...state, items: state.items.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) };
      case FILTERED_ITEMS:
          return { ...state, filtered: state.items.filter(item => item.type2 === action.payload) };
      case SELECT_ITEM:
          return { ...state, selectItem: [...state.selectItem, ...action.payload] };
      case ADD_USER:
          return {...state, users: [...state.users, action.payload]}
      case REMOVE_USER:
          return {...state, users: state.users.filter(user => user.id !== action.payload)}
      case GET_USERS:
          return {...state, items: action.payload}
      case SELECT_ITEM2:
          return { ...state, selectItem2: [...state.selectItem2, ...action.payload] };
      case REMOVE_ITEM:
          return {...state, selectItem2: state.selectItem2.filter(item => item.id !== action.payload)}
      case REMOVE_ITEM2:
          return {...state, selectItem: state.selectItem.filter(item => item.id !== action.payload)}
      default:
          return state;
  }
};


export const addProductAction = payload => ({ type: ADD_PRODUCT, payload });
export const removeProductAction = payload => ({ type: REMOVE_PRODUCT, payload });
export const setProductAction = payload => ({ type: SET_PRODUCTS, payload });
export const setProductInfoAction = payload => ({ type: SET_INFO_PRODUCT, payload });
export const getItemsAction = payload => ({ type: GET_ITEMS, payload });
export const setProductInfoAction2 = payload => ({ type: SET_INFO_PRODUCT2, payload });
export const searchProductAction = payload => ({ type: SEARCH_PRODUCT, payload });
export const filteredProductAction = payload => ({ type: FILTERED_ITEMS, payload });
export const selectItemAction = payload => ({ type: SELECT_ITEM, payload });
export const addUserAction = (payload) => ({type: ADD_USER, payload})
export const removeUserAction = (payload) => ({type: REMOVE_USER, payload})
export const getUserAction = (payload) => ({type: GET_USERS, payload})
export const selectItemAction2 = payload => ({ type: SELECT_ITEM2, payload });
export const removeItemAction = payload => ({ type: REMOVE_ITEM, payload });
export const removeItemAction2 = payload => ({ type: REMOVE_ITEM2, payload });