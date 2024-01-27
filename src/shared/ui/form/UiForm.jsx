import React from 'react';

const UiForm = ({ children, classes, ...props }) => {
	return (
		<form
			{...props}
			className={`${
				classes && classes
			} py-5 px-3 px-sm-4 px-lg-5 background-secondary d-flex flex-column w-100 rounded-4`}>
			{children}
		</form>
	);
};

export default UiForm;
