import React from 'react';
import styles from './UiAlert.module.css';

const UiAlert = ({ title, body, type, onClose }) => {
	return (
		<div
			className={`${styles.alert} rounded alert alert-${
				type ? type : 'primary'
			} alert-dismissible m-2 fade show`}
			role='alert'>
			<h3>{title}</h3>
			<p className='my-0 fw-semibold'>{body}</p>
			<i className='fa-solid fa-xmark fa-xl' onClick={onClose}></i>
		</div>
	);
};

export default UiAlert;
