import React, { useState } from 'react';
import { taskStatusOptions } from '../../../../entities/task/consts';
import { taskCategoryOptions } from '../../../../entities/task/consts/task-categories';
import { useUserData } from '../../../../entities/user';
import { EDIT_ICON } from '../../../../shared/consts';
import { formatDateForDatePicker } from '../../../../shared/lib/helpers';
import { useAlerts, useForm } from '../../../../shared/lib/hooks';
import {
	UiButton,
	UiDatePicker,
	UiForm,
	UiInputField,
	UiModalWindow,
	UiSelect,
} from '../../../../shared/ui';
import { editTask } from '../api/edit-task';

const EditTaskButton = ({ task, onSuccess }) => {
	const { user } = useUserData();
	const { addAlert } = useAlerts();
	const [dueDate, setDueDate] = useState(task.due_date);
	const [taskCategory, setTaskCategory] = useState(task.category_id.name);
	const [taskStatus, setTaskStatus] = useState(task.status);
	const { formData, handleFormChange } = useForm({
		title: task.title,
		description: task.description,
	});

	const handleEditTask = async (e) => {
		e.preventDefault();
		const result = await editTask(localStorage.getItem('access_token'), task._id, {
			user_id: user.id,
			category: taskCategory,
			...formData,
			due_date: dueDate,
			status: taskStatus,
		});

		if (result.status === 200) {
			addAlert(result.message, '', 'success');
			onSuccess();
		} else {
			addAlert('Failed to update task', result.message, 'danger');
		}
	};

	const openModalButton = (
		<UiButton
			type={'button'}
			icon={EDIT_ICON}
			iconClasses={'m-0'}
			classes={'background-blue px-2'}
			data-bs-toggle='modal'
			data-bs-target={`#edit-task-${task._id}`}
		/>
	);

	const onConfirmButton = (
		<UiButton
			type={'submit'}
			data-bs-dismiss='modal'
			classes={'background-blue px-4'}
			onClick={handleEditTask}>
			Update
		</UiButton>
	);

	return (
		<>
			<UiModalWindow
				modalId={`edit-task-${task._id}`}
				modalTitle={'Edit Task'}
				openModalButton={openModalButton}
				onConfirmButton={onConfirmButton}
				isCentered={true}>
				<UiForm classes={'border-0'}>
					<UiInputField
						id={'title'}
						name={'title'}
						label={'Title'}
						value={formData.title}
						onChange={handleFormChange}
						placeholder={'Title of your task...'}
						required
					/>
					<UiInputField
						id={'description'}
						name={'description'}
						label={'Description'}
						value={formData.description}
						onChange={handleFormChange}
						placeholder={'Description...'}
						required
					/>
					<UiSelect
						value={taskCategory}
						options={taskCategoryOptions}
						label={'Category'}
						onChange={(e) => {
							setTaskCategory(e.target.value);
						}}
						classes={'mb-2 background-primary'}
					/>
					<UiSelect
						value={taskStatus}
						label={'Status'}
						options={taskStatusOptions}
						onChange={(e) => {
							setTaskStatus(e.target.value);
						}}
						classes={'mb-2 background-primary'}
					/>
					<UiDatePicker
						value={formatDateForDatePicker(dueDate)}
						classes={'background-primary border-tertiary'}
						onChange={(formattedDate) => {
							setDueDate(formattedDate);
						}}
					/>
				</UiForm>
			</UiModalWindow>
		</>
	);
};

export default EditTaskButton;
