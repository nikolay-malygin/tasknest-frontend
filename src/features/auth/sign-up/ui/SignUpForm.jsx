import React from 'react';
import { UiForm, UiInputField, UiButton, UiLink } from '../../../../shared/ui';
import { useAlerts, useForm } from '../../../../shared/lib/hooks';
import { SIGN_IN_ROUTE } from '../../../../shared/consts';
import signUp from '../api/sign-up';

const SignInForm = () => {
	const { addAlert } = useAlerts();
	const { formData, handleFormChange } = useForm({
		username: '',
		email: '',
		password: '',
	});

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const result = await signUp(formData.username, formData.email, formData.password);
		if (result.status === 200) {
			addAlert('Signed up successfully', result.message, 'success');
		} else {
			addAlert('Failed to sign up', result.message, 'danger');
		}
	};

	return (
		<UiForm onSubmit={handleSubmitForm} classes={'border-tertiary'}>
			<h1 className='title text-center'>Sign Up</h1>
			<UiInputField
				name='username'
				value={formData.username}
				onChange={handleFormChange}
				id={'username'}
				label={'Username'}
				placeholder={'Your username...'}
				required
			/>
			<UiInputField
				name='email'
				value={formData.email}
				onChange={handleFormChange}
				id={'email'}
				type={'email'}
				label={'E-Mail'}
				placeholder={'Your e-mail...'}
				required
			/>
			<UiInputField
				name='password'
				value={formData.password}
				onChange={handleFormChange}
				id={'password'}
				type={'password'}
				label={'Password'}
				placeholder={'Your password...'}
				required
			/>
			<UiButton type={'submit'} classes={'background-green mt-3'}>
				Create an Account
			</UiButton>
			<span className='text-center mt-3'>
				Already have an account?{' '}
				<UiLink to={SIGN_IN_ROUTE} classes={'text-decoration-none color-green fw-semibold'}>
					Sign In
				</UiLink>
			</span>
		</UiForm>
	);
};

export default SignInForm;
