import { call, put } from 'redux-saga/effects';
import { setWorkRates } from '../../reducers/work-rate';
import { requestGetWorkRate } from '../requests/workrate';

export function* handleGetWorkRate(action) {
  try {
    const res = yield call(requestGetWorkRate);
    const { data } = res;
    yield put(setWorkRates(data))
  } catch (err) {
    console.log(err);
  }
}