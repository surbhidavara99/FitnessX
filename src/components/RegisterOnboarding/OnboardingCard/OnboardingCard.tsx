import React, {Component} from 'react';
import {Title} from '@components/Shared/TitleComponent/Title';
import {Colors} from '@styles/colors';
import {Font, height, width} from '@styles/fonts';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';

interface OnboardingCardProps {
  cardItems: Array<{id: number; image: string; title: string}>;
}

interface OnboardingCardState {
  items: any;
}

export class OnboardingCard extends Component<
  OnboardingCardProps,
  OnboardingCardState
> {
  constructor(props: OnboardingCardProps) {
    super(props);
    this.state = {
      items: [
        {id: 1, data: 'anme'},
        {id: 1, data: 'anme'},
      ],
    };
  }

  renderCardItem = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardImage}>
          <Image source={item.image} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <View style={styles.lineDraw} />
          </View>
          <View style={styles.descContainer}>
            <Title
              title={item.desc}
              fontSize={16}
              fontFamily={Font.family.semiBold}
              color={Colors.white}
            />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          renderItem={this.renderCardItem}
          horizontal
          data={this.props.cardItems}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    height: height * 0.6,
    width: width * 0.8,
    borderRadius: 30,
    backgroundColor: Colors.blueLinear,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#C58BF2',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {alignItems: 'center', height: '30%'},
  textTitle: {
    fontFamily: Font.family.semiBold,
    fontSize: 16,
    color: Colors.white,
    // textDecorationLine: 'underline',
  },
  textContainer: {
    height: height * 0.2,
    paddingHorizontal: width * 0.1,
  },
  lineDraw: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    alignSelf: 'center',
    width: '40%',
  },
  descContainer: {alignItems: 'center'},
});
