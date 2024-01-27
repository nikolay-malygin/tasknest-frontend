import React from 'react';
import { CALENDAR_ICON } from '../../../../shared/consts';
import { taskCategoryLabels } from '../../consts/task-categories';

const TaskCard = ({ task, actions }) => {
	return (
		<div className='background-primary p-3 rounded'>
			<p>{taskCategoryLabels[task.category_id.name]}</p>
			<h5>{task.title}</h5>
			<p>{task.description}</p>
			<div className='d-flex justify-content-between'>
				<div className='d-flex gap-3 align-items-center'>
					<i className={CALENDAR_ICON}></i>
					{task.due_date}
				</div>
				<div className='d-flex justify-content-end gap-3'>
					{actions}
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
