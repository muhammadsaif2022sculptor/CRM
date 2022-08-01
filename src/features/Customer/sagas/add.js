import {put, select, takeLatest, delay} from 'redux-saga/effects'
import { set } from '../../../utilities/storage'
import * as actions from '../reducer'

export function *watchAddCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeAddCustomer)
}

export function *takeAddCustomer(action) {
    try{
        const fields = yield select(state => state.customer.form.fields)
        let customers = yield select(state => state.customer.list.customers)

        customers === null ? customers = [] : customers = customers

        const res = [...customers]
        res.push({
            ...fields,
            id: res.length+1
        })
        yield delay(500)
        set('CUSTOMER_KEY', res)
        yield put(actions.createCustomerResult(res))
    } catch(e){
        console.log(e)
    }
}