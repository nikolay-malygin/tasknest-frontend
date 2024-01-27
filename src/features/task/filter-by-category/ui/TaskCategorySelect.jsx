import React from 'react';
import { UiSelect } from '../../../../shared/ui';
import { taskCategoryFilterOptions } from '../../../../entities/task/consts';

const TaskCategorySelect = ({ onChange }) => {
	return (
		<UiSelect
			id={'category-filter'}
			classes={'w-25 background-tertiary'}
			options={taskCategoryFilterOptions}
			onChange={onChange}
		/>
	);
};

export default TaskCategorySelect;
