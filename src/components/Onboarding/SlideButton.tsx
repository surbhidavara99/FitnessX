import {Colors} from '@styles/colors';
import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  Animated,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, {G, Circle} from 'react-native-svg';
import {width} from '@styles/fonts';

interface SlideButtonI {
  onPress?: (event: GestureResponderEvent) => void;
  percentage: any;
  scrollTo: any;
}

export const SlideButton: React.FunctionComponent<SlideButtonI> = (
  props: SlideButtonI,
): JSX.Element => {
  const {percentage, scrollTo} = props;
  const size = 90;
  const strokeWidth = 4;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue: any) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.screen}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#F7F8F8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#92A3FD"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            // strokeDashoffset={circumference - (circumference * 25) / 100}
          />
        </G>
      </Svg>
      <TouchableOpacity
        style={styles.roundButton1}
        onPress={scrollTo}
        activeOpacity={0.6}>
        <MaterialCommunityIcons
          name={'chevron-right'}
          color={Colors.white}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: width * 0.6,
    alignItems: 'center',
  },
  roundButton1: {
    position: 'absolute',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: Colors.blueLinear,
  },
});
