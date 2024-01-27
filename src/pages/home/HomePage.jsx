import React, { useState } from 'react';
import { STATUS_DONE, STATUS_IN_PROGRESS, STATUS_TO_DO } from '../../entities/task/consts';
import { CreateTaskButton, TaskCategorySelect } from '../../features/task';
import { Header, HomepageTitle, TaskContainer } from '../../widgets';

const HomePage = () => {
	const [tasksUpdated, setTasksUpdated] = useState(false);
	const [category, setCategory] = useState('');

	const handleTasksUpdated = () => {
		setTasksUpdated(!tasksUpdated);
	};

	const handleChangeCategory = (e) => {
		setCategory(e.target.value);
	};

	return (
		<>
			<Header />
			<HomepageTitle />
			<main className='container-fluid px-5 mt-4 mb-2'>
				<div className='d-flex justify-content-between mb-3'>
					<TaskCategorySelect onChange={handleChangeCategory} />
					<CreateTaskButton onSuccess={handleTasksUpdated} />
				</div>
				<div className='row gy-3 justify-content-center'>
					<TaskContainer
						tasksUpdated={tasksUpdated}
						onEdit={handleTasksUpdated}
						category={category}
						taskStatus={STATUS_TO_DO}
					/>
					<TaskContainer
						tasksUpdated={tasksUpdated}
						onEdit={handleTasksUpdated}
						category={category}
						taskStatus={STATUS_IN_PROGRESS}
					/>
					<TaskContainer
						tasksUpdated={tasksUpdated}
						onEdit={handleTasksUpdated}
						category={category}
						taskStatus={STATUS_DONE}
					/>
				</div>
			</main>
		</>
	);
};

export default HomePage;
