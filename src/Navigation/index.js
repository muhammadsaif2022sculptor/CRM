import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/welcome'
import RegionScreen from '../screens/RegionList'
import CustomerList from '../screens/CustomerList'
import CustomerDetail from '../screens/CustomerDetail'



export default function Navigation(){
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Welcome'
            >
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}>
                </Stack.Screen>

                <Stack.Screen
                    name='Regions'
                    component={RegionScreen}>
                </Stack.Screen>

                <Stack.Screen
                    name='List'
                    component={CustomerList}>
                </Stack.Screen>

                <Stack.Screen
                    name='Detail'
                    component={CustomerDetail}>
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}