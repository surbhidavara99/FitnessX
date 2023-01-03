import * as React from 'react';
import {Register} from '@components/Register/Register';
import {Props} from 'src/navigation/appNavigation';

export class RegisterScreen extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <>
        <Register />
      </>
    );
  }
}
