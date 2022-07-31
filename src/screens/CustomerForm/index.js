import { Button, SafeAreaView, ScrollView, View, Text } from 'react-native';
import CustomerEdit from '../../features/Customer/edit';
import CustomerAdd from '../../features/Customer/add';

export default function CustomerForm({route}) {
  const {type, id} = route.params

  return (
    <SafeAreaView>
        <ScrollView>
            {type === 'edit' ? <CustomerEdit id={id} / >: <CustomerAdd />}
        </ScrollView>
    </SafeAreaView>
  );
}