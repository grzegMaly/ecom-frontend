const initialState = {
  products: null,
  categories: null,
  pagination: {},
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        pagination: {
          ...state.pagination,
          pageNumber: action.pageNumber,
          pageSize: action.pageSize,
          totalElements: action.totalElements,
          totalPages: action.totalPages,
          lastPage: action.lastPage,
        },
      };
    case "FETCH_CATEGORY":      
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
