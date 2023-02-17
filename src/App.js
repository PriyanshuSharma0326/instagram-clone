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

import { AuthContext } from './context/AuthContext';
import { UserContext } from './context/UserContext';

function App() {
    const { currentUser } = useContext(AuthContext);

    // const [userDetails, setUserDetails] = useState(null);
    
    // useEffect(() => {
    //     const getUserDetails = () => {
    //         const unsubscribe = onSnapshot(doc(db, 'users', currentUser.uid), (doc) => {
    //             setUserDetails(doc.data());
    //         });

    //         return () => {
    //             unsubscribe();
    //         };
    //     }

    //     currentUser.uid && getUserDetails();
    // }, [currentUser?.uid]);

    const { userDetails } = useContext(UserContext);

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
