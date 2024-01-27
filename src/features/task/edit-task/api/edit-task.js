import { SERVER_BASE_URL } from '../../../../shared/consts';

export const editTask = async (access_token, taskId, taskInfo) => {
	try {
		const response = await fetch(SERVER_BASE_URL + '/tasks/edit/' + taskId, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
				Authorization: access_token,
			},
			body: JSON.stringify(taskInfo),
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
