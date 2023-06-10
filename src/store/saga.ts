import { call, put, takeEvery } from 'redux-saga/effects'
import type {StoreAction} from '@/store/actions'
import * as actions from '@/store/actions'

function* StoreState(action: StoreAction) {
  yield put({ type: 'store/auth/store'})
}

function* RestoreState(action: StoreAction) {
  yield put({ type: 'store/auth/restore'})
}

export default function* saga() {
  yield takeEvery(actions.RESTORE_STATE_ACTION, RestoreState)
  yield takeEvery('store/auth/logout', StoreState)
  yield takeEvery('auth/register/fulfilled', StoreState)
  yield takeEvery('auth/login/fulfilled', StoreState)
}