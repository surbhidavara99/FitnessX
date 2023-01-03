import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '@styles/colors';
import {Font, width} from '@styles/fonts';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CommonButtonI {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  onPress: any;
  isIcon?: boolean;
  iconName?: string;
}

export const CommonButton: React.FunctionComponent<CommonButtonI> = (
  props: CommonButtonI,
): JSX.Element => {
  const {title, backgroundColor, onPress, textColor, isIcon, iconName} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonConatiner(backgroundColor)}
        onPress={onPress}>
        <Text style={styles.buttonTitle(textColor)}>{title}</Text>
        {isIcon ? (
          <MaterialCommunityIcons
            name={iconName}
            color={Colors.white}
            size={25}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonConatiner: (backgroundColor: string) => ({
    flexDirection: 'row',
    width: width * 0.9,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: backgroundColor ? backgroundColor : Colors.blueLinear,
  }),
  buttonTitle: (data: string) => ({
    textAlign: 'center',
    fontSize: 16,
    color: data ? data : Colors.white,
    fontFamily: Font.family.bold,
  }),
});

const Conatiner = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.TouchableOpacity`
flexDirection:row,
  width: ${width * 0.9}px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${(props: {backgroundColor: any}) =>
    props.backgroundColor ? props.backgroundColor : Colors.blueLinear};
`;

const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${(props: {textColor: any}) =>
    props.textColor ? props.textColor : Colors.blueLinear};
  font-family: ${Font.family.bold};
`;
