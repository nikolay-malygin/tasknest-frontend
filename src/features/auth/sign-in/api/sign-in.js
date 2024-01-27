import { SERVER_BASE_URL } from '../../../../shared/consts';

const signIn = async (username, password) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/authorization/sign-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		});
		const result = await response.json();
		return response.status === 200 ? result.data : result.message;
	} catch (error) {
		return error.message;
	}
};

export default signIn;
