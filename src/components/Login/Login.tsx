import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CommonButton} from '@components/Shared/ButtonComponent/Button';
import TextInput from '@components/Shared/TextInputComponent/TextInput';
import {Title} from '@components/Shared/TitleComponent/Title';
import {Images} from '@images/index';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@styles/colors';
import {Font, height, width} from '@styles/fonts';
import {RootNavigationProps} from 'src/navigation/types';

export const Login: React.FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title
          title="Hey there,"
          color={Colors.black}
          fontFamily={Font.family.regular}
          fontSize={16}
        />
        <Title
          title="Welcome Back"
          color={Colors.black}
          fontFamily={Font.family.bold}
          fontSize={20}
        />
      </View>
      <View style={styles.formContainer}>
        <View>
          <TextInput placeholder="Email" value="" iconName="email-outline" />
        </View>
        <View>
          <TextInput placeholder="Password" value="" iconName="lock-outline" />
        </View>
      </View>
      <View style={styles.checkBoxContainer}>
        <View style={styles.titleView}>
          <Title
            title="Forgot your password?"
            color={Colors.textInput}
            fontFamily={Font.family.regular}
            fontSize={14}
          />
          <View style={styles.dashline} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CommonButton
          title={'Login '}
          textColor={Colors.white}
          backgroundColor={Colors.blueLinear}
          onPress={() => navigation.navigate('RegisterProfile')}
          isIcon
          iconName="login"
        />
      </View>
      <View>
        <View style={styles.drawLine}>
          <View style={styles.lineContainer} />
          <View>
            <Text style={styles.orText}>Or</Text>
          </View>
          <View style={styles.lineContainer} />
        </View>
        <View style={styles.socialButtons}>
          <View style={styles.socialButtonContainer}>
            <Image source={Images.googleImage} />
          </View>
          <View style={styles.socialButtonContainer}>
            <Image source={Images.facebookImage} />
          </View>
        </View>
        <View style={styles.loginContainer}>
          <Title
            title="Don’t have an account yet? "
            color={Colors.black}
            fontFamily={Font.family.regular}
            fontSize={14}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Title
              title="Register"
              color="#C58BF2"
              fontFamily={Font.family.semiBold}
              fontSize={14}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    marginLeft: 10,
  },
  titleContainer: {
    height: height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    height: height * 0.2,
    padding: 10,
  },
  dashline: {
    borderBottomColor: '#ADA4A5',
    borderBottomWidth: 1,
    alignSelf: 'center',
    width: '100%',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    height: height * 0.05,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: height * 0.4,
    justifyContent: 'flex-end',
  },
  drawLine: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  lineContainer: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDDADA',
  },
  orText: {
    width: 30,
    textAlign: 'center',
  },
  socialButtons: {
    height: height * 0.1,
    flexDirection: 'row',
    width: width * 0.6,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  socialButtonContainer: {
    height: 80,
    width: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.borderColor,
    borderWidth: 1,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
