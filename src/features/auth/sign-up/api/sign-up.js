import { SERVER_BASE_URL } from '../../../../shared/consts';

const signUp = async (username, email, password) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/authorization/sign-up', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, email, password }),
		});

		const result = await response.json();
		return {
			message: result.message,
			status: response.status,
		};
	} catch (error) {
		return {
			message: error.message,
			status: 401,
		};
	}
};

export default signUp;
