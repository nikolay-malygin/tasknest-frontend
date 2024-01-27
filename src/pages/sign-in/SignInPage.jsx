import React from 'react';
import { AuthLayout } from '../../shared/ui/layouts';
import { SignInForm } from '../../features/auth';
import { Header } from '../../widgets';

const SignInPage = () => {
	return (
		<>
			<Header />
			<AuthLayout>
				<SignInForm />
			</AuthLayout>
		</>
	);
};

export default SignInPage;
