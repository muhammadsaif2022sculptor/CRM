import React, { useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import {useUpdateFields} from '../../features/Customer/hooks'
import {PENDING, INPROGRESS} from '../../utilities/helpers/status'
import {regions} from '../../utilities/helpers/regions'


export default function Form({type, handleSubmit, status, id}) {

    const {navigate} = useNavigation()
    const {fields, setFormField} = useUpdateFields(id)
    const {name, lname, region} = fields


    async function submit() {
        await handleSubmit()
        type === 'add' ? navigate('Regions') : navigate('Detail', {id})
    }

    useEffect(() => {
        return () => {
            setFormField('name','')
            setFormField('lname','')
            setFormField('region','')
        }
    },[])

  return (
    <View style={styles.form}>
        
        <TextInput
            key={'name'}
            placeholder='Enter Name'
            value={name}
            style={styles.input}
            onChangeText={text => setFormField('name',text)}
        />
        <View style={{
                    width: '100%',
                    height: 5
                }}></View>

        <TextInput
            key={'lname'}
            placeholder='Enter Last Name'
            value={lname}
            style={styles.input}
            onChangeText={text => setFormField('lname',text)}
        />
        

        <Text style={styles.Text}>Select Region</Text>

        {regions.map(r => (
            <View key={r}>
                {r === region ? (
                    <TouchableOpacity style={styles.regionsSelected} onPress={() => setFormField('region',r)}>
                        <Text>{r}</Text>
                    </TouchableOpacity>
                ) : 
                (
                    <TouchableOpacity style={styles.regions} onPress={() => setFormField('region',r)}>
                        <Text>{r}</Text>
                    </TouchableOpacity>
                )}
            </View>
        ))}

              <TouchableOpacity style={styles.save} onPress={submit} disabled={status !== PENDING && status !== INPROGRESS}>
                        <Text>Save</Text>
            </TouchableOpacity>

    </View>
  );
}   

