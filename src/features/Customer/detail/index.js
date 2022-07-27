import { Button, TouchableOpacity, View, Text } from 'react-native';



export default function Customer({id}) {

    const cust = {
        id: 1,
        name: 'ABC',
        lastName: 'XYZ',
        region: 'South'
    }

  return (
    <View>
        <Text>{id}</Text>
        <Text>{cust.name}</Text>
        <Text>{cust.lastName}</Text>
        <Text>{cust.region}</Text>
        <Button title='Edit'></Button>
    </View>
  );
}   

