import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Title} from '@components/Shared/TitleComponent/Title';
import {Colors} from '@styles/colors';
import {Font, height, width} from '@styles/fonts';

interface OnboardingArr {
  id: string;
  image: any;
  title: string;
  description: string;
}

interface OnboardingItemI {
  item: OnboardingArr;
}

export class OnboardingItem extends React.Component<OnboardingItemI> {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Image
          source={this.props.item.image}
          style={{height: height * 0.5, width: width}}
        />
        <View style={styles.titleContainer}>
          <Title
            title={this.props.item.title}
            fontFamily={Font.family.bold}
            fontSize={24}
          />
          <View style={styles.descContainer}>
            <Text style={styles.descText}>{this.props.item.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    height: height * 0.2,
    padding: 25,
  },
  descContainer: {
    paddingTop: 15,
  },
  descText: {
    fontFamily: Font.family.regular,
    color: Colors.textBrown,
    fontSize: 14,
  },
});
