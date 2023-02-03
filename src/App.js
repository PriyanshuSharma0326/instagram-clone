import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import ProfilePage from './pages/ProfilePage';
import HomeHeader from './components/HomeHeader';
import AppFooter from './components/AppFooter';
import LoginPage from './pages/LoginPage';

import { auth } from './lib/config/firebase';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import SignUpPage from './pages/SignUpPage';

function App() {
    // const user = null;
    const user = useSelector(selectUser);
    console.log(user);

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                }));
            }
            else {
                dispatch(logout());
            }
        });

        return unsubscribe;
    }, [dispatch]);

    return (
        <div className='app'>
            <Router>
                {!user ? 
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
                        <Route path='/virat.kohli/' element={<ProfilePage />} />
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
