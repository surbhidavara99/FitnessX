import * as React from 'react';
import {OnboardingWelcome} from '@components/Welcome';
import {Onboarding} from '@components/Onboarding/Onboading';

interface OnboardingScreenI {
  showWelcome: boolean;
}

export class OnboardingScreen extends React.Component<
  OnboardingScreenI
> {
  public readonly state: OnboardingScreenI = {
    showWelcome: false,
  };

  public renderContent = () => {
    if (this.state.showWelcome) {
      return <Onboarding />;
    }

    return <OnboardingWelcome onPress={this.handlePressNext} />;
  };

  protected handlePressNext = () => {
    this.setState(prevState => ({showWelcome: !prevState.showWelcome}));
  };

  public render(): React.ReactNode {
    return <>{this.renderContent()}</>;
  }
}
