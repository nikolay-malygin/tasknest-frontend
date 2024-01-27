import React from 'react';
import styles from './UiInputField.module.css';

const UiInputField = ({ id, type, label, placeholder, classes, ...props }) => {
	return (
		<div className='mb-2'>
			{label && (
				<label htmlFor={id} className='form-label fw-semibold'>
					{label}
				</label>
			)}

			<input
				{...props}
				id={id}
				type={type ? type : 'text'}
				className={`form-control background-primary ${styles.inputField} ${
					classes && classes
				}`}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default UiInputField;
