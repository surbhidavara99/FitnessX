import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CommonButton} from '@components/Shared/ButtonComponent/Button';
import {Title} from '@components/Shared/TitleComponent/Title';
import {Images} from '@images/index';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@styles/colors';
import {Font, height, width} from '@styles/fonts';
import {AuthNavigationProps, RootNavigationProps} from 'src/navigation/types';

export const WelcomeUser: React.FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation<AuthNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.imageContaine}>
        <Image source={Images.welcomeUser} />
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.usernameContainer}>
          <Title
            title={'Welcome, Stefani'}
            fontSize={25}
            fontFamily={Font.family.bold}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Title
            title={
              'You are all set now, let’s reach your goals together with us'
            }
            fontSize={14}
            fontFamily={Font.family.regular}
            color={Colors.textBrown}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <CommonButton
          title={'Go To Home'}
          onPress={() => navigation.navigate('HomeDashboard')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContaine: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: height * 0.5,
  },
  titleContainer: {
    height: height * 0.1,
    justifyContent: 'flex-end',
  },
  usernameContainer: {alignSelf: 'center'},
  descriptionContainer: {
    alignSelf: 'center',
    paddingHorizontal: width * 0.15,
  },
  buttonContainer: {
    height: height * 0.35,
    justifyContent: 'flex-end',
  },
});
