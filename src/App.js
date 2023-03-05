import React, { useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import ProfilePage from './pages/ProfilePage';
import HomeHeader from './components/HomeHeader';
import AppFooter from './components/AppFooter';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import EditProfile from './components/EditProfile';
import CreatePost from './components/CreatePost';

import { AuthContext } from './context/AuthContext';
import { UserContext } from './context/UserContext';

function App() {
    const { currentUser } = useContext(AuthContext);
    const { userDetails } = useContext(UserContext);

    // const pageTitle = document.getElementById('page-title');

    // pageTitle.innerText = 'Instagram 2.0';

    return (
        <div className='app'>
            <Router>
                {!currentUser ? 
                (<Routes>
                    <Route path='/' element={<LoginPage />} />
                    
                    <Route path='/accounts/emailsignup/' element={<SignUpPage />} />
                </Routes>) : 
                (<AppBody>
                    <Sidebar />

                    <Routes>
                        <Route path='/' 
                            element={<>
                                <HomeHeader />
                                <HomePage />
                            </>}
                        />

                        <Route path={`/${userDetails?.username}/`} element={<ProfilePage />} />

                        <Route path='/accounts/edit/' element={<EditProfile />} />

                        <Route path='/create/' element={<CreatePost />} />
                    </Routes>

                    <AppFooter />
                </AppBody>)}
            </Router>
        </div>
    );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;
