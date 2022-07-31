import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducer'
import { get } from '../../../utilities/storage'

export function* watchLoadCustomer() {
    yield takeLatest(actions.loadCustomer.toString(), takeLoadCustomer)
}

export function* takeLoadCustomer() {
    try {
        const customers = yield get('CUSTOMER_KEY')
        yield delay(500)

        yield put(actions.loadCustomerResult(customers))
    } catch (error) {
        console.log(error)
    }
}