export const STATUS_TO_DO = 'todo';
export const STATUS_IN_PROGRESS = 'inprogress';
export const STATUS_DONE = 'done';

export const STATUS_ALIAS = {
	[STATUS_TO_DO]: 'To Do',
	[STATUS_IN_PROGRESS]: 'In Progress',
	[STATUS_DONE]: 'Done',
};

export const taskStatusOptions = [
	{ value: STATUS_TO_DO, label: STATUS_ALIAS[STATUS_TO_DO] },
	{
		value: STATUS_IN_PROGRESS,
		label: STATUS_ALIAS[STATUS_IN_PROGRESS],
	},
	{
		value: STATUS_DONE,
		label: STATUS_ALIAS[STATUS_DONE],
	},
];
