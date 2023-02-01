import React from 'react';
import styled from 'styled-components';
import ProfileDisplay from '../components/ProfileDisplay';
import ProfilePosts from '../components/ProfilePosts';

// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function ProfilePage() {
    return (
        <ProfilePageContainer>
            <Profile>
                <ProfileInfo>
                    <ProfileDisplay />
                </ProfileInfo>

                <ProfilePosts></ProfilePosts>
            </Profile>
        </ProfilePageContainer>
    );
}

const ProfilePageContainer = styled.div`
    flex: 0.84;
    flex-grow: 1;
    display: flex;
    overflow-y: scroll;
    background-color: rgb(250, 250, 250);
`;

const Profile = styled.div`
    margin-left: 0;
    width: 975px;
    height: 100vh;

    @media (min-width: 735px) {
        margin-left: 11.8%;
    }
`;

const ProfileInfo = styled.div`
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
`;
