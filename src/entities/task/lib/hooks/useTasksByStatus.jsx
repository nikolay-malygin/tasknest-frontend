import { useEffect, useState } from 'react';
import { useAlerts } from '../../../../shared/lib/hooks';
import { getTasksByStatus } from '../../api/get-tasks-by-status';

const useTasksByStatus = (taskStatus, userId, access_token, tasksUpdated, category) => {
	const { addAlert } = useAlerts();
	const [tasks, setTasks] = useState([]);

	const fetchTasksByStatus = async () => {
		const data = await getTasksByStatus(taskStatus, userId, access_token, category);

		if (typeof data === 'string') {
			addAlert(data, '', 'danger');
		} else {
			setTasks(data);
		}
	};

	useEffect(() => {
		fetchTasksByStatus();
	}, [tasksUpdated, category]);

	return { tasks, fetchTasksByStatus };
};

export default useTasksByStatus;
