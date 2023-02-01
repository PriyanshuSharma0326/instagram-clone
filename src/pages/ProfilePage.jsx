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
`;

const Profile = styled.div`
    margin-left: 148px;
    width: 975px;
    height: 100vh;
`;

const ProfileInfo = styled.div`
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
`;

// const ProfileSnippet = styled.div`
//     display: flex;
// `;

// const ProfileImage = styled.div`
//     flex: 0.3;
// `;

// const ProfileImageBox = styled.div`
//     height: 150px;
//     width: 150px;
//     margin: 0 auto;

//     > img {
//         height: 99%;
//         width: 99%;
//         border: 0.8px solid gray;
//         border-radius: 50%;
//         object-fit: cover;
//         cursor: pointer;
//     }
// `;

// const ProfileDetails = styled.div`
//     margin-left: 30px;
//     flex: 0.7;
// `;

// const ProfileDetailsTopRow = styled.div`
//     display: flex;
//     align-items: center;
//     padding: 4px 0;

//     > h4 {
//         font-size: 20px;
//         font-weight: 400;
//         /* margin-top: 3px; */
//         color: #222222;
//     }

//     > .MuiSvgIcon-root {
//         margin-left: 10px;
//         font-size: 24px;
//         cursor: pointer;
//     }
// `;

// const EditProfileButton = styled.button`
//     font-size: 14px;
//     font-weight: 600;
//     border-radius: 8px;
//     align-items: center;
//     border: none;
//     outline: none;
//     padding: 7px 16px;
//     margin-left: 20px;
//     background-color: rgb(239, 239, 239);
//     align-items: center;
//     font-family: var(--profile-font);

//     :hover {
//         background-color: rgb(220, 220, 220);
//         cursor: pointer;
//     }
// `;

// const ProfileDetailsMidRow = styled.div`
//     display: flex;
//     text-align: center;
//     padding: 20px 0;

//     > h4 {
//         font-weight: 400;
//         font-size: 16px;
//         margin-right: 40px;

//         > span {
//             font-weight: 600;
//         }
//     }

//     .midRowButton {
//         cursor: pointer;
//     }
// `;

// const ProfileDetailsBottomRow = styled.div`
//     font-family: var(--profile-font);

//     > h3 {
//         font-size: 14px;
//         font-weight: 600;
//     }

//     > h4 {
//         font-size: 14px;
//         font-weight: 400;
//     }

//     > a {
//         font-size: 14px;
//         font-weight: 600;
//         color: rgb(0, 55, 107);
//         line-height: 14px;

//         :hover {
//             cursor: pointer;
//             text-decoration: underline;
//         } 
//     }
// `;
