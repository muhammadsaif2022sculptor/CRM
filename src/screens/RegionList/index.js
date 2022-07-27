import { Button, SafeAreaView, ScrollView, View, Text } from 'react-native';
import Region from '../../features/Region/list';


export default function RegionScreen() {
  return (
    <SafeAreaView>
        <ScrollView>
            <View>
                <Button title='Add New Customer'></Button>
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