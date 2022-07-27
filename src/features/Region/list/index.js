import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Region() {
    const {navigate} = useNavigation()

    const regions = ['south East', 'West', 'South', 'ABC']

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

