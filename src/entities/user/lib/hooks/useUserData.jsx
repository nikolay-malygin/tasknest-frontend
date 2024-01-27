import { useContext } from 'react';
import { UserContext } from '../../../../shared/lib/contexts';

export const useUserData = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUserData must be used within a UserProvider');
	}
	return context;
};
