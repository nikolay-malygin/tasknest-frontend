import { HomePage, SignInPage, SignUpPage } from '../pages';
import { HOMEPAGE_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '../shared/consts';

export const publicRoutes = [
	{
		path: SIGN_UP_ROUTE,
		Component: SignUpPage,
	},
	{
		path: SIGN_IN_ROUTE,
		Component: SignInPage,
	},
];

export const authRoutes = [
	{
		path: HOMEPAGE_ROUTE,
		Component: HomePage,
	},
];
