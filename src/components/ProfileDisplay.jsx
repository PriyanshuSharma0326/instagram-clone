import React from 'react'
import styled from 'styled-components';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function ProfileDisplay() {
    return (
        <ProfileSnippet>
            {/* <ProfileHeader></ProfileHeader> */}
            <ProfileImage className='profileImage'>
                <ProfileImageBox className='profileImageBox'>
                    <img src='https://www.mykhel.com/thumb/247x100x233/cricket/players/8/3788.jpg' alt='profile-pic' />
                </ProfileImageBox>
            </ProfileImage>

            <ProfileDetails>
                <ProfileDetailsTopRow>
                    <h4>virat.kohli</h4>

                    <EditProfileButton>
                        Edit profile
                    </EditProfileButton>

                    <SettingsOutlinedIcon />
                </ProfileDetailsTopRow>

                <ProfileDetailsMidRow>
                    <h4><span>12</span> posts</h4>
                    <h4 className='midRowButton'><span>135</span> followers</h4>
                    <h4 className='midRowButton'><span>85</span> following</h4>
                </ProfileDetailsMidRow>

                <ProfileDetailsBottomRow>
                    <h3>Virat Kohli</h3>

                    <h4>
                        🫶🏼 <br></br>
                        @indiancricket
                    </h4>

                    <a href='https://www.google.com' target='_blank' rel='noreferrer noopener'>
                        https://www.google.com
                    </a>
                </ProfileDetailsBottomRow>
            </ProfileDetails>
        </ProfileSnippet>
    );
}

// const ProfileHeader = styled.div``;

const ProfileSnippet = styled.div`
    display: flex;
`;

const ProfileImage = styled.div`
    flex: 0.332;
    display: flex;
`;

const ProfileImageBox = styled.div`
    height: 150px;
    width: 150px;
    margin: auto;

    > img {
        height: 99%;
        width: 99%;
        border: 0.8px solid gray;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }
`;

const ProfileDetails = styled.div`
    margin-left: 30px;
    flex: 0.7;
`;

const ProfileDetailsTopRow = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 0;

    > h4 {
        font-size: 20px;
        font-weight: 400;
        color: #222222;
    }

    > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 24px;
        cursor: pointer;
    }
`;

const EditProfileButton = styled.button`
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    align-items: center;
    border: none;
    outline: none;
    padding: 7px 16px;
    margin-left: 20px;
    background-color: rgb(239, 239, 239);
    align-items: center;
    font-family: var(--profile-font);

    :hover {
        background-color: rgb(220, 220, 220);
        cursor: pointer;
    }
`;

const ProfileDetailsMidRow = styled.div`
    display: flex;
    text-align: center;
    padding: 20px 0;

    > h4 {
        font-weight: 400;
        font-size: 16px;
        margin-right: 40px;

        > span {
            font-weight: 600;
        }
    }

    .midRowButton {
        cursor: pointer;
    }
`;

const ProfileDetailsBottomRow = styled.div`
    font-family: var(--profile-font);

    > h3 {
        font-size: 14px;
        font-weight: 600;
    }

    > h4 {
        font-size: 14px;
        font-weight: 400;
    }

    > a {
        font-size: 14px;
        font-weight: 600;
        color: rgb(0, 55, 107);
        line-height: 14px;
        text-decoration: none;

        :hover {
            cursor: pointer;
            text-decoration: underline;
        } 
    }
`;
