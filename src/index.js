import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthContextProvider } from './context/AuthContext';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
import { UserContextProvider } from './context/UserContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <AuthContextProvider>
        <UserContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </UserContextProvider>
    </AuthContextProvider>
);

reportWebVitals();
