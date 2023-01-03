import {Font, height, width} from '@styles/fonts';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Title} from '@components/Shared/TitleComponent/Title';
import {Colors} from '@styles/colors';

interface CardPropsI {
  backgroundColor: string;
  titleText?: string;
  descText?: string;
}

export const Card: React.FunctionComponent<CardPropsI> = (
  props: CardPropsI,
): JSX.Element => {
  const {backgroundColor, titleText, descText} = props;
  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer, {backgroundColor: backgroundColor}]}>
        <View
          style={{
            justifyContent: 'center',
            // alignItems: 'center',
            height: height * 0.1,
          }}>
          <Title
            title={titleText}
            color={Colors.white}
            fontFamily={Font.family.semiBold}
            fontSize={18}
          />
          <Title
            title={descText}
            color={Colors.white}
            fontFamily={Font.family.semiBold}
            fontSize={18}
          />
        </View>
        <View
          style={{
            height: height * 0.1,
            backgroundColor: 'pink',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 60,
              width: 150,
              borderRadius: 15,
              backgroundColor: Colors.purple,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: Colors.white,
                fontFamily: Font.family.bold,
              }}>
              View More
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  cardContainer: {
    height: height * 0.25,
    width: width * 0.9,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
