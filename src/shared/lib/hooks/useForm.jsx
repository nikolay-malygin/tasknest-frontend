import { useState } from 'react';

const useForm = (initialState) => {
	const [formData, setFormData] = useState(initialState);

	const handleFormChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const resetForm = () => {
		setFormData(initialState);
	};

	return { formData, handleFormChange, resetForm };
};

export default useForm;
