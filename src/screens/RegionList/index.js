import { Button, SafeAreaView, ScrollView, View, Text } from 'react-native';
import Region from '../../features/Region/list';
import { useNavigation } from '@react-navigation/native';


export default function RegionScreen() {
  const { navigate } = useNavigation()
  return (
    <SafeAreaView>
        <ScrollView>
            <View>
                <Button title='Add New Customer' onPress={() => navigate('form', {type:'add'})}></Button>
                <View style={{
                    width: '100%',
                    height: 20
                }}></View>
                <View>
                    <Text>Select Region to see employee</Text>
                </View>
                <Region />
           </View>
        </ScrollView>
    </SafeAreaView>
  );
}