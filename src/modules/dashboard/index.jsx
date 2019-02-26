import React, { lazy, Suspense } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import CommonPageLayout from '../../components/CommonPageLayout';
import Spinner from '../../components/Spinner';

const Temp = lazy(() => import('./temp'));

class Dashboard extends React.Component {
  render () {
    return (
      <CommonPageLayout>
          <Container>
              <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
              <Suspense fallback={<Spinner size="medium" />}>
                  <Temp />
              </Suspense>
          </Container>
      </CommonPageLayout>
    )
  }
};

export default Dashboard;
