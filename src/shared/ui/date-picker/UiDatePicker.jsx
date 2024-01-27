import React from 'react';

const UiDatePicker = ({ value, onChange, classes, ...props }) => {
	const formatDate = (date) => {
		const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
		return new Date(date).toLocaleDateString('en-GB', options).replace(/\//g, '.');
	};

	const handleDateChange = (e) => {
		const formattedDate = formatDate(e.target.value);
		onChange(formattedDate);
	};

	return (
		<input
			type='date'
			value={value}
			className={`${classes && classes} color-header rounded px-2 py-1`}
			onChange={handleDateChange}
			{...props}
		/>
	);
};

export default UiDatePicker;
