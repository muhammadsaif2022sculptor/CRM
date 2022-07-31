import { all } from "redux-saga/effects";
import { watchAddCustomer } from "./add";
import { watchEditCustomer } from "./edit";
import { watchLoadCustomer } from "./load";

export default function* customer() {
    yield all([
        watchAddCustomer(),
        watchEditCustomer(),
        watchLoadCustomer()
    ])
}