import * as React from 'react';
import {Props} from 'src/navigation/appNavigation';
import {Login} from '@components/Login/Login';

export class LoginScreen extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <>
        <Login />
      </>
    );
  }
}
