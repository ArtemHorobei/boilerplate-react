import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

import Spinner from '../../components/Spinner';

const Dashboard = () => <div>
    <Container>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
        <Spinner />
    </Container>
</div>;

export default Dashboard;
