import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { Chrono } from '../screens/Chrono'
import { ROUTE_NAMES } from '../assets/constants/routes'

const Stack = createStackNavigator()

export const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ROUTE_NAMES.HOME} component={Home} />
            <Stack.Screen name={ROUTE_NAMES.CHRONO} component={Chrono} />
        </Stack.Navigator>
    </NavigationContainer>
)
