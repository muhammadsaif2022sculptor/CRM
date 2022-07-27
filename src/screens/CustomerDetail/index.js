import { Button, SafeAreaView, ScrollView, View, Text } from 'react-native';
import Customer from '../../features/Customer/detail';


export default function CustomerDetail({route}) {
  const {id} = route.params
  return (
    <SafeAreaView>
        <ScrollView>
            <Customer id={id} />
        </ScrollView>
    </SafeAreaView>
  );
}