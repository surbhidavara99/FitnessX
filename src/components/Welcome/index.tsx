import {Images} from '@images/index';
import {Font, height} from '@styles/fonts';
import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Title} from '@components/Shared/TitleComponent/Title';
import {Colors} from '@styles/colors';
import {CommonButton} from '@components/Shared/ButtonComponent/Button';

interface OnboardingWelcomeI {
  onPress: any;
}

export class OnboardingWelcome extends React.Component<OnboardingWelcomeI> {
  public render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Images.welcomeLogo} />
        </View>
        <View style={styles.titleContainer}>
          <Title
            title={'Everybody Can Train'}
            fontSize={18}
            fontFamily={Font.family.regular}
            color={Colors.textBrown}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            title={'Get Started'}
            backgroundColor={Colors.white}
            onPress={this.props.onPress}
            textColor={Colors.blueLinear}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueLinear,
  },
  imageContainer: {
    height: height * 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleContainer: {
    height: height * 0.1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    height: height * 0.35,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'flex-end',
  },
});
