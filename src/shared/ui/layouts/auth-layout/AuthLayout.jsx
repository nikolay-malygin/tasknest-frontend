import React from 'react';

const AuthLayout = ({ children }) => {
	return (
		<div className='container min-vh-90'>
			<div className='row min-vh-90 align-items-center justify-content-center'>
				<div className='col-12 col-md-7 col-xl-5'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
