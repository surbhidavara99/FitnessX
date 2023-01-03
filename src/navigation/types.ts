import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    OnboardingScreen: undefined;
    Register: undefined;
    RegisterProfile: undefined;
    RegisterOnboarding: undefined;
    login: undefined;
    WelcomeUser: undefined
};

export type AuthStackParamList = {
    HomeDashboard: undefined
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Register'>;
export type AuthNavigationProps = NativeStackNavigationProp<AuthStackParamList, 'HomeDashboard'>;
