import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type StackParamList = {
  HomeScreen: StackScreenProps<StackParamList, 'HomeScreen'>;
  ProfileScreen: StackScreenProps<StackParamList, 'ProfileScreen'>;
}

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
          
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
