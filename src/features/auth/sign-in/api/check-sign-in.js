import { SERVER_BASE_URL } from '../../../../shared/consts';

const checkSignIn = async () => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/authorization/check', {
			headers: {
				Authorization: localStorage.getItem('access_token'),
			},
		});

		if (response.ok) {
			return (await response.json()).data;
		}
	} catch (error) {
		console.error('Sign-in failed:', error.message);
	}
};

export default checkSignIn;
