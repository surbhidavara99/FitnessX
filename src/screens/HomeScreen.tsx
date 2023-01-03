import * as React from 'react';
import {Props} from 'src/navigation/appNavigation';
import {HomeDashboard} from '@components/HomeDashboard/HomeDashboard';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

export class HomeScreen extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <>
        <ErrorBoundary>
          <HomeDashboard />
        </ErrorBoundary>
      </>
    );
  }
}
