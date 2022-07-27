import { Button, SafeAreaView, ScrollView, View, Text } from 'react-native';
import Customer from '../../features/Customer/list';


export default function CustomerList({route}) {
  const {region} = route.params
  return (
    <SafeAreaView>
        <ScrollView>
            <Customer region={region}/>
        </ScrollView>
    </SafeAreaView>
  );
}