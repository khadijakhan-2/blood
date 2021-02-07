
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Contact from '../screens/Contact'
import Welcome from '../screens/Welcome'



const Stack = createStackNavigator();


function Navigation(){  
return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name="Blood Bank Login" component={Home} />
        <Stack.Screen name="Contact" component={Contact}   options={{
          
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}  />
        <Stack.Screen name="Welcome" component={Welcome}         options={{
          
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
 />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}
export default Navigation;