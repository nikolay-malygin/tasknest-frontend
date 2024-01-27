import React, { useEffect, useState } from 'react';
import { UserContext } from '../../shared/lib/contexts';
import { checkSignIn } from '../../features/auth';
import { useNavigate } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from '../../shared/consts';

export const UserProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState({ is_logged_in: false });

	const login = (token, userData) => {
		setUser({ ...userData, is_logged_in: true });
		localStorage.setItem('access_token', token);
	};

	const logout = async () => {
		setUser({ is_logged_in: false });
		localStorage.removeItem('access_token');
	};

	const checkAuth = async () => {
		const data = await checkSignIn();
		if (data) {
			login(data.access_token, data.user);
			navigate(HOMEPAGE_ROUTE);
		} else {
			logout();
		}
	};

	useEffect(() => {
		checkAuth();
		setTimeout(() => {
			checkAuth();
		}, 1000 * 60 * 3);
	}, []);

	return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};
