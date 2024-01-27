import React from 'react';
import { AuthLayout } from '../../shared/ui/layouts';
import { SignUpForm } from '../../features/auth';
import { Header } from '../../widgets';

const SignUpPage = () => {
	return (
		<>
			<Header />
			<AuthLayout>
				<SignUpForm />
			</AuthLayout>
		</>
	);
};

export default SignUpPage;
