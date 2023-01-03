import {Colors} from '@styles/colors';
import {Font, width} from '@styles/fonts';
import React from 'react';
import {
  StyleSheet,
  TextInput as InputText,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface TextInputI {
  placeholder: string;
  value: string;
  iconName?: string;
}

export const TextInput: React.FunctionComponent<TextInputI> = (
  props: TextInputI,
): JSX.Element => {
  const {placeholder, value, iconName} = props;
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={iconName}
        color={Colors.textInput}
        size={30}
      />
      <InputText
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

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
  input: {
    height: 40,
    margin: 12,
    color: Colors.textInput,
    fontFamily: Font.family.regular,
    fontSize: 16,
  },
});

export default TextInput;
