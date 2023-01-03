import {Colors} from '@styles/colors';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Heading = styled.Text`
  font-size: ${(props: {fontSize: any}) => props.fontSize};
  font-family: ${(props: {fontFamily: any}) => props.fontFamily};
  color: ${(props: {color: any}) => (props.color ? props.color : Colors.black)};
`;

interface TitleI {
  title: string;
  fontSize: number;
  fontFamily: string;
  color?: string;
}

export const Title = (props: TitleI) => {
  const {title, fontSize, fontFamily, color} = props;
  return (
    <View>
      <Heading fontSize={fontSize} color={color} fontFamily={fontFamily}>
        {title}
      </Heading>
    </View>
  );
};
