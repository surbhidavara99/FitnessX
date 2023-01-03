import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from '@screens/OnboardingScreen';
import {RegisterScreen} from '@screens/RegisterScreen';
import {AuthStackParamList, RootStackParamList} from './types';
import {RegisterProfileScreen} from '@screens/RegisterProfileScreen';
import {RegisterOnboardingScreen} from '@screens/RegisterOnboarding';
import {WelcomeUserScreen} from '@screens/WelcomeUser';
import {LoginScreen} from '@screens/LoginScreen';
import {HomeScreen} from '@screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="HomeDashboard" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

const RootStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="RegisterProfile" component={RegisterProfileScreen} />
      <Stack.Screen
        name="RegisterOnboarding"
        component={RegisterOnboardingScreen}
      />
      <Stack.Screen name="WelcomeUser" component={WelcomeUserScreen} />
    </Stack.Navigator>
  );
};

function AppNavigator() {
  const [isAuth, setIsAuth] = React.useState(true);

  return (
    <NavigationContainer>
      {isAuth ? RootStackNavigator() : AuthStackNavigator()}
    </NavigationContainer>
  );
}

export default AppNavigator;
