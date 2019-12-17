const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "AGE_UP":
      newState.age++;
      return newState;
    case "AGE_DOWN":
      newState.age--;
      return newState;
    default:
      return newState;
  }
};

export default reducer;
