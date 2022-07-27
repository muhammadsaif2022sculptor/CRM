import {Pressable, Text, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const {navigate} = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome To Crm</Text>
      <Pressable style={styles.Button} onPress={() => navigate('Regions')}>
        <Text>See Regions</Text>
      </Pressable>
    </View>
  );
}

