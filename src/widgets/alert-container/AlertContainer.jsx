import React from 'react';
import styles from './AlertContainer.module.css';
import { useAlerts } from '../../shared/lib/hooks';
import { UiAlert } from '../../shared/ui';

const AlertContainer = () => {
	const { getAlerts, removeAlert } = useAlerts();

	return (
		<div className={styles.alertContainer}>
			<div className='container-fluid'>
				<div className='row flex-row-reverse'>
					<div className='col-12 col-md-8 col-lg-4'>
						{getAlerts().map((alert) => (
							<UiAlert
								key={alert.id}
								title={alert.title}
								body={alert.body}
								type={alert.type}
								onClose={() => removeAlert(alert.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AlertContainer;
