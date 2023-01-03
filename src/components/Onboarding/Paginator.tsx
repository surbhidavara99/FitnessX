import * as React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Colors} from '@styles/colors';
import {width} from '@styles/fonts';

interface PaginatorI {
  data: any;
  scrollX: any;
}

export const Paginator: React.FunctionComponent<PaginatorI> = (
  props: PaginatorI,
) => {
  const {data, scrollX} = props;
  return (
    <View style={styles.container}>
      {data.map((_, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 10,
    backgroundColor: Colors.blueLinear,
    borderRadius: 5,
    marginHorizontal: 8,
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
});
