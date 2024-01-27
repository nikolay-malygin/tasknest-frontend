import React from 'react';
import { UiButton } from '../../../../shared/ui';
import { SIGN_OUT_ICON } from '../../../../shared/consts';
import { useUserData } from '../../../../entities/user';

const SignOutButton = () => {
	const { logout } = useUserData();

	return (
		<UiButton
			onClick={() => logout()}
			icon={SIGN_OUT_ICON}
			classes={'background-tertiary color-header'}>
			Sign Out
		</UiButton>
	);
};

export default SignOutButton;
