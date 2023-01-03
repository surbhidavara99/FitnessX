import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '@styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {}

interface CheckboxStateI {
  isCheck: boolean;
}

export class CheckBox extends Component<IProps, CheckboxStateI> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isCheck: false,
    };
  }

  checkboxClicked = () => {
    this.setState(prevState => ({
      isCheck: !prevState.isCheck,
    }));
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.checkboxClicked()}>
        <View style={styles.container}>
          <View style={styles.checkBoxContainer} />
          {this.state.isCheck ? (
            <MaterialCommunityIcons
              name={'check'}
              color={Colors.black}
              size={17}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: '#ADA4A5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxContainer: {
    width: 12,
    justifyContent: 'center',
  },
});
