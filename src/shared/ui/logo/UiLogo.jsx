import React from 'react';
import styles from './UiLogo.module.css';

const UiLogo = ({ classes }) => {
	return (
		<span className={`fw-bold ${classes ? classes : 'fs-3'} ${styles.gradient}`}>TaskNest</span>
	);
};

export default UiLogo;
