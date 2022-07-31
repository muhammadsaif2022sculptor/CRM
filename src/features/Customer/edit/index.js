import React from 'react'
import { View } from 'react-native';
import Form from '../../../components/forms';
import {useEditCustomer} from '../hooks'


export default function CustomerEdit({id}) {

  const {status, onSubmit} = useEditCustomer(id)

  return (
    <View>
       <Form type={'edit'} handleSubmit={onSubmit} status={status} id={id}/>
    </View>
  );
}

