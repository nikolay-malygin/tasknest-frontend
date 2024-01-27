export const CATEGORY_PERSONAL = 'personal';
export const CATEGORY_WORK = 'work';
export const CATEGORY_STUDY = 'study';
export const CATEGORY_ALL = '';

export const taskCategoryLabels = {
	[CATEGORY_PERSONAL]: 'Personal',
	[CATEGORY_WORK]: 'Work',
	[CATEGORY_STUDY]: 'Study',
	[CATEGORY_ALL]: 'All',
};

export const taskCategoryOptions = [
	{ value: CATEGORY_PERSONAL, label: taskCategoryLabels[CATEGORY_PERSONAL] },
	{ value: CATEGORY_WORK, label: taskCategoryLabels[CATEGORY_WORK] },
	{ value: CATEGORY_STUDY, label: taskCategoryLabels[CATEGORY_STUDY] },
];

export const taskCategoryFilterOptions = [
	{ value: CATEGORY_ALL, label: taskCategoryLabels[CATEGORY_ALL] },
	{ value: CATEGORY_PERSONAL, label: taskCategoryLabels[CATEGORY_PERSONAL] },
	{ value: CATEGORY_WORK, label: taskCategoryLabels[CATEGORY_WORK] },
	{ value: CATEGORY_STUDY, label: taskCategoryLabels[CATEGORY_STUDY] },
];
