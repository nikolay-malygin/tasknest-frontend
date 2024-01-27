import React from 'react';

const UiButton = ({ children, type, icon, iconClasses, classes, ...props }) => {
	return (
		<button
			{...props}
			type={type ? type : 'button'}
			className={`btn fw-semibold ${classes && classes}`}>
			{icon && <i className={`${icon} ${iconClasses ? iconClasses : 'me-2'}`}></i>}
			{children}
		</button>
	);
};

export default UiButton;
