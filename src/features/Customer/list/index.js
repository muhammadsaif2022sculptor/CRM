import { Button, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';


export default function Customer({region}) {

    const {navigate} = useNavigation()
    const cust = [{
        id: 1,
        name: 'ABC'
    },

    {
        id:2,
        name:'cdf'
    }    
]

  return (
    <View>
        <Text>{region}</Text>
        {cust.map(c => (
            <View key={c.id}>
            <TouchableOpacity style={style.container} onPress={() => navigate('Detail', {id: c.id})}>
                <Text>{c.name}</Text>
                <Text>See Detail</Text>
                <View style={{width: '100%', height: '15'}}></View>
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

