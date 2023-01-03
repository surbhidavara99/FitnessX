import { Dimensions } from "react-native";

export const height = Dimensions.get('window').height;
export const width = Dimensions.get('window').width;


// tslint:disable no-magic-numbers
export const Font = {

    family: {
        light: 'Poppins-Light',
        regular: 'Poppins-Regular',
        semiBold: 'Poppins-SemiBold',
        bold: 'Poppins-Bold',
        extraBold: 'Poppins-ExtraBold',
    }
};
