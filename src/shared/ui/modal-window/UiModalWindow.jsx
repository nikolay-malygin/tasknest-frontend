import React from 'react';
import UiButton from '../button/UiButton';
import { CLOSE_ICON } from '../../consts';

const UiModalWindow = ({
	modalId,
	modalTitle,
	openModalButton,
	onConfirmButton,
	isCentered = false,
	children,
}) => {
	return (
		<>
			{openModalButton}
			<div
				id={modalId}
				className='modal fade'
				// data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-hidden='true'>
				<div className={`modal-dialog ${isCentered && 'modal-dialog-centered'}`}>
					<div className='modal-content'>
						<div className='modal-header border-0 background-secondary'>
							<h1 className='modal-title title fs-5' id={`${modalId}Label`}>
								{modalTitle}
							</h1>
							<UiButton
								type='button'
								classes='color-header'
								iconClasses={'m-0'}
								data-bs-dismiss='modal'
								icon={CLOSE_ICON}
							/>
						</div>
						<div className='modal-body background-secondary'>{children}</div>
						<div className='modal-footer border-0 background-secondary'>
							<UiButton
								type={'button'}
								classes={'background-tertiary color-header'}
								data-bs-dismiss='modal'>
								Cancel
							</UiButton>
							{onConfirmButton}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UiModalWindow;
