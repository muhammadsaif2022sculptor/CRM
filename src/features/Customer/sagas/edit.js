import {put, select, takeLatest, delay} from 'redux-saga/effects'
import { set } from '../../../utilities/storage'
import * as actions from '../reducer'

export function *watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer)
}

export function *takeEditCustomer(action) {
    const id = action.payload
    console.log('id', id)

    try{
        const fields = yield select(state => state.customer.form.fields)
        let customers = yield select(state => state.customer.list.customers)

        customers === null ? customers = [] : customers = customers

        const res = customers.map(c => {
            if(c.id !== id) return c
            return fields
        })
        yield delay(500)
        set('CUSTOMER_KEY', res)
        yield put(actions.editCustomerResult(res))
    } catch(e){
        console.log(e)
    }
}