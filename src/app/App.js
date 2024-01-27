import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { UserProvider } from './providers';
import AlertProvider from './providers/AlertProvider';
import './styles/global.css';
import { AlertContainer } from '../widgets';

function App() {
	return (
		<BrowserRouter>
			<AlertProvider>
				<UserProvider>
					<AlertContainer/>
					<AppRouter />
				</UserProvider>
			</AlertProvider>
		</BrowserRouter>
	);
}

export default App;
