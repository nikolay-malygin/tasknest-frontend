import React from 'react';
import { UiLogo } from '../../shared/ui';

const HomepageTitle = () => {
	return (
		<section className='text-center mt-4'>
			<h1 className='title'>
				Get <span className='blue-text-gradient title'>Organized</span> and Become{' '}
				<span className='blue-text-gradient title'>Focused</span> with
			</h1>
			<UiLogo classes={'title'} />
		</section>
	);
};

export default HomepageTitle;
