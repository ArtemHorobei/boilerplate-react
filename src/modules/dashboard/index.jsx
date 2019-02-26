import React from 'react';
import { connectModal } from 'redux-modal';
import { Container, Segment } from 'semantic-ui-react';

import CommonPageLayout from '../../components/CommonPageLayout';

class Dashboard extends React.Component {
  render () {
    return (
      <CommonPageLayout>
          <Container>
              <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
          </Container>
      </CommonPageLayout>
    )
  }
};

export default Dashboard;
