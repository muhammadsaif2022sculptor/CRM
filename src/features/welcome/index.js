import {Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const {navigate} = useNavigation()
  
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome To Crm</Text>
      <TouchableOpacity style={styles.Button} onPress={() => navigate('Regions')}>
        <Text style={styles.color}>See Regions</Text>
      </TouchableOpacity>
    </View>
  );
}

