import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Dropdown from '@components/Shared/DropdownComponent/Dropdown';
import TextInput from '@components/Shared/TextInputComponent/TextInput';
import {Title} from '@components/Shared/TitleComponent/Title';
import {Images} from '@images/index';
import {Colors} from '@styles/colors';
import {Font, height} from '@styles/fonts';
import {CommonButton} from '@components/Shared/ButtonComponent/Button';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from 'src/navigation/types';

export const RegisterProfile: React.FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation<RootNavigationProps>();
  const data = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];

  const [selectedItem, setSelectedItem] = useState('');

  const onSelectHandle = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageViewContainer}>
        <Image source={Images.registerProfile} />
      </View>
      <View style={styles.formContainer}>
        <Title
          title="Let’s complete your profile"
          color={Colors.black}
          fontFamily={Font.family.bold}
          fontSize={26}
        />
        <Title
          title="It will help us to know more about you!"
          color={Colors.textBrown}
          fontFamily={Font.family.regular}
          fontSize={12}
        />
        <View style={styles.inputsContainer}>
          <View>
            <Dropdown
              value={selectedItem}
              label="Choose Gender"
              data={data}
              onSelect={onSelectHandle}
            />
          </View>
          <View>
            <TextInput
              placeholder="Date of Birth"
              value=""
              iconName="calendar-month-outline"
            />
          </View>
          <View>
            <TextInput
              placeholder="Your Weight"
              value=""
              iconName="weight-lifter"
            />
          </View>
          <View>
            <TextInput
              placeholder="Your Height"
              value=""
              iconName="swap-vertical"
            />
          </View>
        </View>
      </View>
      <View style={{}}>
        <CommonButton
          textColor={Colors.white}
          title={'Next'}
          onPress={() => navigation.navigate('RegisterOnboarding')}
          isIcon
          iconName="chevron-right"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  imageViewContainer: {
    height: height * 0.45,
  },
  formContainer: {
    marginTop: 10,
    height: height * 0.45,
    alignItems: 'center',
  },
  inputsContainer: {
    height: height * 0.4,
    padding: 10,
  },
});
