import 'react-native-gesture-handler';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {  NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../screens/pages/TabBar';

// import DetailsScreen from './pages/DetailsScreen';
// import ProfileScreen from './pages/ProfileScreen';
// import SettingsScreen from './pages/SettingsScreen';

import Login from '../screens/context/LoginRoot'
import Home  from '../screens/pages/HomeScreen';
import Profile from '../screens/pages/Profile';
import Profile_edit from '../screens/pages/Profile_edit';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Profile"
        options={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile"  component={Profile}  options={{ headerShown: false }} />

          

      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile_edit"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Profile_edit"
        component={Profile_edit}
        options={{ headerShown: false }}/>

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>

        
    </Stack.Navigator>
  );
}

function TabStack() {
  return (
    <NavigationContainer>
    <Tab.Navigator tabBar={(props) => <TabBar {...props}/>}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
         />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
        />
      
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TabStack;
