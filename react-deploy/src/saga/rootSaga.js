import { takeLatest } from 'redux-saga/effects';
import { handleGetWorkRate } from './handlers/workrate';
import { GET_WORKRATE } from '../reducers/work-rate';

export function* watcherSaga() {
  //look for any actions
  yield takeLatest(GET_WORKRATE, handleGetWorkRate)
}