import * as React from 'react';
import {Props} from 'src/navigation/appNavigation';
import {RegisterProfile} from '@components/RegisterProfile/RegisterProfile';

export class RegisterProfileScreen extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <>
        <RegisterProfile />
      </>
    );
  }
}
