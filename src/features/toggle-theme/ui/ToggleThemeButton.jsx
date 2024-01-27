import React, { useState } from 'react';
import { UiButton } from '../../../shared/ui';
import { MOON_ICON, SUN_ICON } from '../../../shared/consts';
import { setTheme, isDarkModeSet } from '../lib/helpers/set-theme';
import styles from './ToggleThemeButton.module.css';

const ToggleThemeButton = () => {
	const [isDarkMode, setIsDarkMode] = useState(isDarkModeSet());

	const handleToggleTheme = () => {
		isDarkModeSet() ? setTheme('light-mode') : setTheme('dark-mode');
		setIsDarkMode(isDarkModeSet());
	};

	return (
		<UiButton
			classes={`color-header ${styles.toggleButton}`}
			iconClasses={'m-0'}
			onClick={() => handleToggleTheme()}
			icon={isDarkMode ? MOON_ICON : SUN_ICON}
		/>
	);
};

export default ToggleThemeButton;
