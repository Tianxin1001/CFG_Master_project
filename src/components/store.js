import { configureStore } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  username: null,
};

// Define the reducer function
function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'user/login':
      return {
        ...state,
        username: action.payload,
      };
    case 'user/logout':
      return {
        ...state,
        username: null,
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
