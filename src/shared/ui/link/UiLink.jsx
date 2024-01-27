import React from 'react';
import { Link } from 'react-router-dom';

const UiLink = ({ children, to, classes, ...props }) => {
	return (
		<Link to={to} className={`${classes && classes}`} {...props}>
			{children}
		</Link>
	);
};

export default UiLink;
