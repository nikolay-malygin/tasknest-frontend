import React from 'react';
import { HOMEPAGE_ROUTE, MENU_BAR_ICON } from '../../shared/consts';
import { UiButton, UiLink, UiLogo } from '../../shared/ui';
import { ToggleThemeButton } from '../../features/toggle-theme';
import { SignOutButton } from '../../features/auth';
import { useUserData } from '../../entities/user';

const Header = () => {
	const { user } = useUserData();
	return (
		<nav className='navbar navbar-expand-lg background-secondary'>
			<div className='container'>
				<UiLink to={HOMEPAGE_ROUTE} classes='navbar-brand'>
					<UiLogo />
				</UiLink>
				<UiButton
					classes={'navbar-toggler color-header shadow-none py-2 border-none'}
					icon={MENU_BAR_ICON}
					iconClasses={'m-0'}
					type={'button'}
					data-bs-toggle='collapse'
					data-bs-target='#header'
					aria-controls='header'
					aria-expanded='false'
				/>
				<div id='header' className='collapse navbar-collapse'>
					<div className='navbar-nav d-flex justify-content-end w-100'>
						<div className='d-flex flex-column flex-lg-row align-items-center gap-3'>
							<ToggleThemeButton />
							{user.is_logged_in && <SignOutButton />}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
