import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CommonButton} from '@components/Shared/ButtonComponent/Button';
import {CheckBox} from '@components/Shared/CheckboxComponent/Checkbox';
import TextInput from '@components/Shared/TextInputComponent/TextInput';
import {Title} from '@components/Shared/TitleComponent/Title';
import {Images} from '@images/index';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@styles/colors';
import {Font, height, width} from '@styles/fonts';
import {RootNavigationProps} from 'src/navigation/types';

export const Register: React.FunctionComponent = (): JSX.Element => {
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
          title="Create an Account"
          color={Colors.black}
          fontFamily={Font.family.bold}
          fontSize={20}
        />
      </View>
      <View style={styles.formContainer}>
        <View>
          <TextInput
            placeholder="First Name"
            value=""
            iconName="account-outline"
          />
        </View>
        <View>
          <TextInput
            placeholder="Last Name"
            value=""
            iconName="account-outline"
          />
        </View>
        <View>
          <TextInput placeholder="Email" value="" iconName="email-outline" />
        </View>
        <View>
          <TextInput placeholder="Password" value="" iconName="lock-outline" />
        </View>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox />
        <View style={styles.policyText}>
          <Title
            title="By continuing you accept our Privacy Policy and Term of Use"
            color={Colors.textInput}
            fontFamily={Font.family.regular}
            fontSize={14}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CommonButton
          title={'Register'}
          textColor={Colors.white}
          backgroundColor={Colors.blueLinear}
          onPress={() => navigation.navigate('RegisterProfile')}
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
            title="Already have an account? "
            color={Colors.black}
            fontFamily={Font.family.regular}
            fontSize={14}
          />
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Title
              title="Login"
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
  titleContainer: {
    height: height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    height: height * 0.4,
    padding: 10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    height: height * 0.05,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: height * 0.2,
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
  policyText: {
    marginLeft: 10,
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
