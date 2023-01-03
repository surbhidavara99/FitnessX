import * as React from 'react';

import {Props} from 'src/navigation/appNavigation';
import {RegisterOnboarding} from '@components/RegisterOnboarding/RegisterOnboarding';

export class RegisterOnboardingScreen extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <>
        <RegisterOnboarding />
      </>
    );
  }
}
