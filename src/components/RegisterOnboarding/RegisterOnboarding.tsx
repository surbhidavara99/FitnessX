import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {CommonButton} from '@components/Shared/ButtonComponent/Button';
import {Title} from '@components/Shared/TitleComponent/Title';
import {Images} from '@images/index';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@styles/colors';
import {Font, height} from '@styles/fonts';
import {RootNavigationProps} from 'src/navigation/types';
import {OnboardingCard} from './OnboardingCard/OnboardingCard';

export const RegisterOnboarding: React.FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation<RootNavigationProps>();

  const cardItems = [
    {
      id: 1,
      image: Images.registerOnboarding1,
      title: 'Improve Shape',
      desc: 'I have a low amount of body fat and need / want to build more muscle',
    },
    {
      id: 2,
      image: Images.registerOnboarding2,
      title: 'Lean & Tone',
      desc: 'I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way',
    },
    {
      id: 3,
      image: Images.registerOnboarding3,
      title: 'Lose a Fat',
      desc: 'I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title
          title="What is your goal ?"
          color={Colors.black}
          fontFamily={Font.family.bold}
          fontSize={20}
        />
        <Title
          title="It will help us to choose a best program for you"
          color={Colors.textBrown}
          fontFamily={Font.family.regular}
          fontSize={12}
        />
      </View>
      <View style={styles.cardContiner}>
        <OnboardingCard cardItems={cardItems} />
      </View>
      <View>
        <CommonButton
          title={'Confirm'}
          onPress={() => navigation.navigate('WelcomeUser')}
          backgroundColor={Colors.blueLinear}
          textColor={Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContiner: {
    height: height * 0.65,
  },
});
