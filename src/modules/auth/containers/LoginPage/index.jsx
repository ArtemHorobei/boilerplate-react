import React from 'react';
import { Card } from 'semantic-ui-react';

import UnauthorizedPageLayout from '../../../../components/UnauthorizedPageLayout';
import LoginForm from './Form';

const LoginPage = () => (
    <UnauthorizedPageLayout>
        <Card>
            <LoginForm />
        </Card>
    </UnauthorizedPageLayout>
);

export default LoginPage;
