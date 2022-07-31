import { Button, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useListCustomer} from '../hooks'
import Reminder from '../Reminder';



export default function Customer({id}) {

  const { navigate } = useNavigation()
  const customers = useListCustomer()
  

  return (
    <View>
    {customers.map(cust => (
      cust.id === id && <View key={'detail' + cust.id}>
        <Text>Id: {id}</Text>
        <Text>Name: {cust.name}</Text>
        <Text>Last Name: {cust.lName}</Text>
        <Text>Region: {cust.region}</Text>
      <Button title='Edit' onPress={() => navigate('form', {type:'edit', id: cust.id})}></Button>
      <Reminder name={cust.name + cust.lName} region={cust.region}/>
  </View>
    ))}
    </View>
  );
}   

