import React from 'react';
import { Card } from 'semantic-ui-react';

import AuthPageLayout from '../../../components/AuthPageLayout';
import LoginForm from './Form';

const LoginPage = () => (
    <AuthPageLayout>
        <Card>
            <LoginForm />
        </Card>
    </AuthPageLayout>
);

export default LoginPage;
