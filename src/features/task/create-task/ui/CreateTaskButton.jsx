import React, { useState } from 'react';
import { STATUS_TO_DO } from '../../../../entities/task/consts';
import {
	CATEGORY_PERSONAL,
	taskCategoryOptions,
} from '../../../../entities/task/consts/task-categories';
import { useUserData } from '../../../../entities/user';
import { PLUS_ICON } from '../../../../shared/consts';
import { formatDateForDatePicker, getCurrentDate } from '../../../../shared/lib/helpers';
import { useAlerts, useForm } from '../../../../shared/lib/hooks';
import {
	UiButton,
	UiDatePicker,
	UiForm,
	UiInputField,
	UiModalWindow,
	UiSelect,
} from '../../../../shared/ui';
import { createTask } from '../api/create-task';

const CreateTaskButton = ({ onSuccess }) => {
	const { user } = useUserData();
	const { addAlert } = useAlerts();
	const [dueDate, setDueDate] = useState(getCurrentDate());
	const [taskCategory, setTaskCategory] = useState(CATEGORY_PERSONAL);
	const { formData, handleFormChange } = useForm({
		title: '',
		description: '',
		status: STATUS_TO_DO,
	});

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const result = await createTask(user.id, localStorage.getItem('access_token'), {
			...formData,
			due_date: dueDate,
			category: taskCategory,
		});

		if (result.status === 201) {
			addAlert(result.message, '', 'success');
			onSuccess();
		} else {
			addAlert('Failed to create task', result.message, 'danger');
		}
	};

	const openModalButton = (
		<UiButton
			type={'button'}
			classes={'background-green px-4 py-2'}
			icon={PLUS_ICON}
			data-bs-toggle='modal'
			data-bs-target='#create-task'>
			New Task
		</UiButton>
	);

	const onConfirmButton = (
		<UiButton
			type={'submit'}
			data-bs-dismiss='modal'
			classes={'background-blue'}
			onClick={handleSubmitForm}>
			Create
		</UiButton>
	);

	return (
		<>
			<UiModalWindow
				modalId={'create-task'}
				modalTitle={'Create Task'}
				openModalButton={openModalButton}
				onConfirmButton={onConfirmButton}
				isCentered={true}>
				<UiForm classes={'border-0'} onSubmit={handleSubmitForm}>
					<UiInputField
						id={'title'}
						name={'title'}
						label={'Title'}
						maxLength={40}
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
						label={'Category'}
						options={taskCategoryOptions}
						onChange={(e) => {
							setTaskCategory(e.target.value);
						}}
						classes={'mb-3 background-primary'}
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

export default CreateTaskButton;
