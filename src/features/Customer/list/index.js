import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import {useListCustomer} from '../hooks'
import { useEffect } from 'react';


export default function Customer({region}) {

    const {navigate} = useNavigation()
    const cust = useListCustomer()

    useEffect(() => {
        console.log(cust, region)
      },[])

  return (
    <View>
        {cust && cust.map(c => (
            c.region === region && <View key={region + c.id}>
            <TouchableOpacity style={style.container} onPress={() => navigate('Detail', {id: c.id})}>
                <Text>{c.name}</Text>
                <Text>See Detail</Text>
                <View style={{width: '100%', height: 15}}></View>
            </TouchableOpacity>
            <View style={{
                    width: '100%',
                    height: 5
                }}></View>
            </View>
        ))}
    </View>
  );
}   

