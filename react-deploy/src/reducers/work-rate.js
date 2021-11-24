const initailState = {
  workRates: [],
  summary: 0,
};

export const SET_WORKRATE = 'SET_WORKRATES';
export const GET_WORKRATE = 'GET_WORKRATES';
export const SET_SUM_WORKRATE = 'SET_SUM_WORKRATE';

export const getWorkRates = () => ({
  type: GET_WORKRATE,
})

export const setWorkRates = (workRates) => ({
  type: SET_WORKRATE,
  workRates,
});

export const setSumWorkRates = (price) => ({
  type: SET_SUM_WORKRATE,
  price,
})

const workRateReducer = (state = initailState, action) => {
  console.log('workRateReducer');
  console.log(action);
  switch (action.type) {
    case 'SET_WORKRATES':
      const { workRates } = action;
      return Object.assign({}, state, {
        workRates,
      });
    case 'UPDATE_MESSAGE':
      return Object.assign({}, state, {
        message: action.message,
      });
    case 'SET_SUM_WORKRATE':
      return Object.assign({}, state, {
        summary: state.summary + action.price,
      });
    default: return state;
  }
}

export default workRateReducer;