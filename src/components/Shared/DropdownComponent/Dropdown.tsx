import {Colors} from '@styles/colors';
import {Font, width} from '@styles/fonts';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface DropdownProps {
  value: string;
  label: string;
  data: Array<{label: string; value: string}>;
  onSelect?: any;
}

interface DropdownStateI {
  visible: boolean;
}

export class Dropdown extends Component<DropdownProps, DropdownStateI> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  onSelectedItem = (value: any): void => {
    this.setState({visible: false});
    this.props.onSelect(value);
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.8}
          onPress={() => this.toggleDropdown()}>
          <MaterialCommunityIcons
            name={'account-multiple'}
            color={Colors.textInput}
            size={30}
          />
          <Text style={styles.buttonText}>
            {!!this.props.value ? this.props.value?.label : this.props.label}
          </Text>

          <MaterialCommunityIcons
            name={'chevron-down'}
            color={Colors.black}
            size={17}
          />
        </TouchableOpacity>

        {this.state.visible
          ? this.props.data.map((_value, i) => {
              return (
                <View style={styles.dropdown}>
                  <TouchableOpacity
                    key={String(i)}
                    onPress={() => this.onSelectedItem(_value)}>
                    <Text style={styles.dropDownText}>{_value.label}</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 3,
    backgroundColor: '#F7F8F8',
    alignSelf: 'center',
    alignItems: 'center',
    width: width * 0.9,
    borderRadius: 20,
    borderColor: '#F7F8F8',
    marginBottom: 7,
    paddingLeft: 10,
  },
  buttonText: {
    flex: 1,
    margin: 12,
    color: Colors.textInput,
    fontFamily: Font.family.regular,
    fontSize: 16,
  },
  dropdown: {
    height: 35,
    backgroundColor: '#F3EAEA',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    borderColor: '#F7F8F8',
  },
  dropDownText: {
    textAlign: 'center',
    fontFamily: Font.family.regular,
    fontSize: 14,
  },
});

export default Dropdown;
