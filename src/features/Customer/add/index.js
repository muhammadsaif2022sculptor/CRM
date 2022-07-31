import React from 'react'
import { View } from 'react-native';
import Form from '../../../components/forms';
import {useNewCustomer} from '../hooks'
import { PENDING } from '../../../utilities/helpers/status';


export default function CustomerAdd() {

  const {onSubmit} = useNewCustomer()

  return (
    <View>
       <Form type='add' handleSubmit={onSubmit} status={PENDING}/>
    </View>
  );
}   

