import React, { useEffect } from 'react'
import { Keyboard, View, Button, Text } from 'react-native'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'

const onSubmit = (seconds, name, region) => {
  Keyboard.dismiss()
  const schedulingOptions = {
    content: {
      title: `Reminder !! `,
      body: 'Please contact' + name + 'from' + region + 'region',
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: 'blue'
    },
    trigger: {
      seconds: seconds,
    },
  }
  
  
  Notifications.scheduleNotificationAsync(
    schedulingOptions,
  )
}

const handleNotification = () => {
  console.warn('Your notification ran, but won`t show up in the app!')
}

const askNotification = async () => {
  const { status } = await Notifications.requestPermissionsAsync()
  if (Constants.isDevice && status === 'granted') {
    console.log('Notification permissions granted.')
  }
}

const Reminder = ({name, region}) => {
  useEffect(() => {
    askNotification()

    const listener = Notifications.addNotificationReceivedListener(handleNotification)
    return () => listener.remove()
  }, [])

  return (
    <View>
      <Text>Press the button to set reminder to contact this customer</Text>

      <Button onPress={() => onSubmit(10, name, region)} title='Schedule'/>
    </View>)
}

export default Reminder