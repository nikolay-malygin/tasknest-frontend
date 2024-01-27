import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UiForm, UiInputField, UiButton, UiLink } from '../../../../shared/ui';
import { HOMEPAGE_ROUTE, SIGN_UP_ROUTE } from '../../../../shared/consts';
import { useAlerts, useForm } from '../../../../shared/lib/hooks';
import { useUserData } from '../../../../entities/user';
import signIn from '../api/sign-in';

const SignInForm = () => {
	const navigate = useNavigate();
	const { addAlert } = useAlerts();
	const { login } = useUserData();
	const { formData, handleFormChange } = useForm({
		username: '',
		password: '',
	});

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const data = await signIn(formData.username, formData.password);
		if (typeof data !== 'string') {
			login(data.access_token, data.user);
			navigate(HOMEPAGE_ROUTE);
		} else {
			addAlert('Sign in failed', data, 'danger');
		}
	};

	return (
		<UiForm onSubmit={handleSubmitForm} classes={'border-tertiary'}>
			<h1 className='title text-center'>Sign In</h1>
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
				Login
			</UiButton>
			<span className='text-center mt-3'>
				Don't have an account yet?{' '}
				<UiLink to={SIGN_UP_ROUTE} classes={'text-decoration-none color-green fw-semibold'}>
					Sign Up
				</UiLink>
			</span>
		</UiForm>
	);
};

export default SignInForm;
