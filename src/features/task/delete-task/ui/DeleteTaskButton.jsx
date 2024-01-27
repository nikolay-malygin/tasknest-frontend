import React from 'react';
import { UiButton, UiModalWindow } from '../../../../shared/ui';
import { DELETE_ICON } from '../../../../shared/consts';
import { useAlerts } from '../../../../shared/lib/hooks';
import { deleteTask } from '../api/delete-task';

const DeleteTaskButton = ({ taskId, onSuccess }) => {
	const { addAlert } = useAlerts();

	const handleDelete = async (e) => {
		const result = await deleteTask(taskId, localStorage.getItem('access_token'), addAlert);
		if (result.status === 200) {
			onSuccess();
			addAlert(result.message, '', 'success');
		} else {
			addAlert(result.message, '', 'danger');
		}
	};

	const openModalButton = (
		<UiButton
			type={'button'}
			classes={'background-red px-2'}
			icon={DELETE_ICON}
			iconClasses={'m-0'}
			data-bs-toggle='modal'
			data-bs-target={`#delete-task-${taskId}`}></UiButton>
	);

	const onConfirmButton = (
		<UiButton
			type={'submit'}
			data-bs-dismiss='modal'
			classes={'background-red'}
			onClick={handleDelete}>
			Delete
		</UiButton>
	);

	return (
		<>
			<UiModalWindow
				modalId={`delete-task-${taskId}`}
				modalTitle={'Delete Task'}
				openModalButton={openModalButton}
				onConfirmButton={onConfirmButton}
				isCentered={true}>
				<p>Are you sure you want to delete the task?</p>
			</UiModalWindow>
		</>
	);
};

export default DeleteTaskButton;
