const initailState = {
  workRates: [],
};

const workRateReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'UPDATE_WORKRATE':
      return Object.assign({}, state, {
        donate: state.workRates,
      });
    case 'UPDATE_MESSAGE':
      return Object.assign({}, state, {
        message: action.message,
      });
    default: return state;
  }
}

export default workRateReducer;