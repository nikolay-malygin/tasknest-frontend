import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { SIGN_IN_ROUTE } from '../shared/consts';
import { useUserData } from '../entities/user';

const AppRouter = () => {
	const { user } = useUserData();

	return (
		<Routes>
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} exact />
			))}
			{user.is_logged_in &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} exact />
				))}
			<Route path='*' element={<Navigate to={SIGN_IN_ROUTE} />} />
		</Routes>
	);
};

export default AppRouter;
