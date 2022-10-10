import {
  COMMON_SET_PEOPLE,
  COMMON_SET_LOADING,
  COMMON_SET_ERROR,
} from "./types";

const INIT_STATE = {
  people: [],
  loading: false,
  loadMore: false,
  error: "",
  isListEnd: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case COMMON_SET_PEOPLE:
      return {
        ...state,
        people: [...state.people, ...action.payload],
        loading: false,
        loadMore: false,
      };
    case COMMON_SET_LOADING:
      if (action.payload.page === 1) {
        return { ...state, loading: true };
      } else {
        return { ...state, loadMore: true };
      }
    case COMMON_SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loadMore: false,
      };
  }

  return state;
};
