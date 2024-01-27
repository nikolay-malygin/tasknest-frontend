// From '12.12.2022' to '2022-12-12'
export const formatDateForDatePicker = (dateString) => {
	const parts = dateString.split('.');
	const reversedDateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
	return reversedDateString;
};

export const getCurrentDate = () => {
	const currentDate = new Date();

	const day = currentDate.getDate();
	const month = currentDate.getMonth() + 1;
	const year = currentDate.getFullYear();

	const formattedDay = day < 10 ? `0${day}` : day;
	const formattedMonth = month < 10 ? `0${month}` : month;

	// "dd.mm.yyyy"
	const formattedCurrentDate = `${formattedDay}.${formattedMonth}.${year}`;

	return formattedCurrentDate;
};
