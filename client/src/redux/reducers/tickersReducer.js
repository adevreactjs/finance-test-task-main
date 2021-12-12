const initialState = {
  items: [],
  isLoading: false,
};

const tickers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TICKERS':
      return {
        ...state,
        items: action.payload,
      };

    case 'DELETE_TICKERS':
      return {
        ...state,
        items: state.items.filter((obj, i) => i !== action.payload),
      };

    case 'ADD_TICKERS':
      return {
        ...state,
        items: state.items.filter((obj, i) => i === action.payload),
      };
    default:
      return state;
  }
};

export default tickers;
