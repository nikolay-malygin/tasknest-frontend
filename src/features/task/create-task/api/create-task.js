import { SERVER_BASE_URL } from '../../../../shared/consts';

export const createTask = async (userId, access_token, taskData) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/tasks/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: access_token,
			},
			body: JSON.stringify({
				user_id: userId,
				...taskData,
			}),
		});

		const result = await response.json();
		return {
			message: result.message,
			status: response.status,
		};
	} catch (error) {
		return {
			message: error.message,
			status: 400,
		};
	}
};
