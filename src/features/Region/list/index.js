import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {regions} from '../../../utilities/helpers/regions'
import { useLoadCustomer } from '../../Customer/hooks';
import { useEffect } from 'react';


export default function Region() {
    const {navigate} = useNavigation()
    const {load} = useLoadCustomer()

    useEffect(() => {
        load()
    },[load])
    
  return (
    <View>
        {regions.map(r => (
            <View key={Math.random()}>
                <Button title={r}
                onPress={() => navigate('List', {region: r})}
                >
                </Button>
                <View style={{
                    width: '100%',
                    height: 5
                }}></View>
            </View>
        ))}
    </View>
  );
}   

