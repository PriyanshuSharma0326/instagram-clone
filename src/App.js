import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <div className='app'>
            <Router>
                <AppBody>
                    <Sidebar />

                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/virat.kohli/' element={<ProfilePage />} />
                    </Routes>
                </AppBody>
            </Router>
        </div>
    );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;