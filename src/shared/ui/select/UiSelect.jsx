import React from 'react';
import styles from './UiSelect.module.css';

const UiSelect = ({ id, label, options, value, classes, onChange, ...props }) => {
	return (
		<>
			{label && (
				<label htmlFor={id} className='color-header fw-semibold'>
					{label}
				</label>
			)}
			<select
				{...props}
				value={value}
				id={id}
				onChange={onChange}
				className={`form-select ${styles.select} ${classes && classes}`}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</>
	);
};

export default UiSelect;
