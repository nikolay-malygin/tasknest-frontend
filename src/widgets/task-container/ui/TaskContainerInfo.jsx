import React from 'react';
import { STATUS_ALIAS } from '../../../entities/task/consts/task-statuses';

const TaskContainerInfo = ({ taskStatus, taskNumber }) => {
	return (
		<div className='fw-semibold fs-5 mb-2 d-flex justify-content-center gap-2'>
			{STATUS_ALIAS[taskStatus]}
			<span className='px-2 rounded background-secondary'>{taskNumber}</span>
		</div>
	);
};

export default TaskContainerInfo;
