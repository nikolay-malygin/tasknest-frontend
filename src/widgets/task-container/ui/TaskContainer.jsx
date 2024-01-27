import React from 'react';
import { useTasksByStatus } from '../../../entities/task/lib/hooks';
import { TaskCard } from '../../../entities/task/ui';
import { useUserData } from '../../../entities/user';
import { DeleteTaskButton, EditTaskButton } from '../../../features/task';
import TaskContainerInfo from './TaskContainerInfo';

const TaskContainer = ({ taskStatus, category, tasksUpdated, onEdit }) => {
	const { user } = useUserData();
	const { tasks, fetchTasksByStatus } = useTasksByStatus(
		taskStatus,
		user.id,
		localStorage.getItem('access_token'),
		tasksUpdated,
		category
	);

	return (
		<div className='col-12 col-md-6 col-lg-4'>
			<div className='background-tertiary px-2 py-3 rounded'>
				<TaskContainerInfo taskStatus={taskStatus} taskNumber={tasks.length} />
				<div
					style={{ maxHeight: '50vh', overflowY: 'auto' }}
					className='d-flex flex-column gap-3'>
					{tasks.map((task, index) => (
						<TaskCard
							key={task._id}
							task={task}
							actions={[
								<EditTaskButton
									key={`edit-${index}`}
									task={task}
									onSuccess={() => {
										onEdit();
									}}
								/>,
								<DeleteTaskButton
									key={task._id}
									taskId={task._id}
									onSuccess={() => {
										fetchTasksByStatus();
									}}
								/>,
							]}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default TaskContainer;
