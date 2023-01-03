import * as React from 'react';
import {Props} from 'src/navigation/appNavigation';
import {WelcomeUser} from '@components/WelcomeUser/WelcomeUser';

export class WelcomeUserScreen extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <>
        <WelcomeUser />
      </>
    );
  }
}
