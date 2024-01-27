import { SERVER_BASE_URL } from '../../../../shared/consts';

export const deleteTask = async (taskId, access_token) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/tasks/delete/' + taskId, {
			method: 'DELETE',
			headers: {
				Authorization: access_token,
			},
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
