import * as React from 'react';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import {useRef} from 'react';
import {useState} from 'react';
import {onboardingData} from './OnboardingData';
import {OnboardingItem} from './OnboardingItem/OnboardingItem';
import {Paginator} from './Paginator';
import {SlideButton} from './SlideButton';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProps} from 'src/navigation/types';

export const Onboarding: React.FunctionComponent<any> = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < onboardingData.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('Register');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          ref={slidesRef}
          data={onboardingData}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
        />
      </View>
      <Paginator data={onboardingData} scrollX={scrollX} />
      <SlideButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / onboardingData.length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
