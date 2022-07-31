import { createSlice } from '@reduxjs/toolkit'
import { PENDING, INPROGRESS, REQUESTING, SUCCESS } from '../../utilities/helpers/status'

const name = 'customer'

const initialState = {
    list: {
        status: PENDING,
        customers: []
    },
    create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    load: {
        status: PENDING,
    },
    form: {
        fields: {
            name: '',
            lname: '',
            region: ''
        },
    },
}

const reducers = {
    createCustomer: (state) => {
        state.create.status = REQUESTING
    },
    createCustomerResult: (state, { payload }) => {
        state.create.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
        state.create = initialState.create
    },
    editCustomer: (state) => {
        state.edit.status = REQUESTING
    },

    editCustomerResult: (state, { payload }) => {
        state.edit.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields
        state.edit = initialState.edit
    },
    setForm: (state, { payload }) => {
        const customer = state.list.customers.find(a => a.id === payload)

        if (customer) {
            state.form.fields = customer
        }
    },
    setFormField: (state, { payload }) => {
        const current = state.form.fields
        const { field, value } = payload

        const fields = {
            ...current,
            [field]: value,
        }

        state.form.fields = fields
    },
    loadCustomer : (state) => {
        state.load.status = REQUESTING
    },
    loadCustomerResult : (state, {payload}) => {
        state.load.status = SUCCESS
        state.list.customers = payload
        state.load = initialState.load
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    createCustomer,
    createCustomerResult,
    editCustomer,
    editCustomerResult,
    setForm,
    setFormField,
    loadCustomer,
    loadCustomerResult
} = slice.actions

export default slice.reducer

