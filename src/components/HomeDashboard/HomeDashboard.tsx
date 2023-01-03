import * as React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TextInput from '@components/Shared/TextInputComponent/TextInput';
import {Title} from '@components/Shared/TitleComponent/Title';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@styles/colors';
import {Font, height, width} from '@styles/fonts';
import {RootNavigationProps} from 'src/navigation/types';
import {Card} from '@components/Shared/CardComponent/Card';

export const HomeDashboard: React.FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation<RootNavigationProps>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Title
          title="Welcome Back"
          color={Colors.black}
          fontFamily={Font.family.regular}
          fontSize={16}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '90%', justifyContent: 'flex-end'}}>
            <Title
              title="Stefani Wong"
              color={Colors.black}
              fontFamily={Font.family.bold}
              fontSize={20}
            />
          </View>
          <View
            style={{
              width: '10%',
              alignItems: 'flex-end',
              alignContent: 'flex-start',
            }}>
            <MaterialCommunityIcons
              name={'bell-badge-outline'}
              color={Colors.black}
              size={30}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <Card
          backgroundColor={Colors.blueLinear}
          titleText="BMI (Body Mass Index)"
          descText="You have a normal weight"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    marginLeft: 10,
  },
  titleContainer: {
    height: height * 0.2,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  cardContainer: {
    // justifyContent: 'center',
    height: height * 0.25,
    alignItems: 'center',
  },
});
