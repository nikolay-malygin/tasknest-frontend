import { SERVER_BASE_URL } from '../../../shared/consts';

export const getTasksByStatus = async (status, user_id, access_token, category) => {
	try {
		let url = SERVER_BASE_URL + `/tasks/${user_id}?status=${status}`;

		if (category) {
			url += `&category=${category}`;
		}

		const response = await fetch(url, {
			headers: {
				Authorization: access_token,
			},
		});

		const result = await response.json();
		return response.status === 200 ? result : result.message;
	} catch (error) {
		return error.message;
	}
};
