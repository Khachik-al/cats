let defaultState = {
  images: [],
  categories: []
};

export default function Reducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_IMAGES": {
      return {
        ...state,
        images: action.payload
      };
    }
    case "SHOW_MORE": {
      return {
        ...state,
        images: [...state.images, ...action.payload]
      };
    }
    case "GET_CATEGORIES": {
      return {
        ...state,
        categories: action.payload
      };
    }
    default: return state;
  }
};