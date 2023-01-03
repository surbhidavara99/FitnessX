import * as React from 'react';
import {Text, View} from 'react-native';
import {Font} from '@styles/fonts';

interface ErrorBoundaryStateI {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryStateI> {
  public readonly state: ErrorBoundaryStateI = {
    error: null,
    errorInfo: null,
  };

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({error, errorInfo});
  }

  public render(): React.ReactNode {
    if (this.state.errorInfo) {
      return (
        <View
          style={{
            flex: 1,
            alignSelf: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: Font.family.semiBold,
              fontSize: 16,
            }}>
            Sorry, but something went wrong
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
