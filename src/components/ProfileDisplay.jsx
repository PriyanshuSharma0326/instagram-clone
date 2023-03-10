import React, { useContext } from 'react';
import styled from 'styled-components';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function ProfileDisplay() {
    const navigate = useNavigate();

    const { userDetails } = useContext(UserContext);

    return (
        <>
            <ProfileSnippet>
                <ProfileImage className='profileImage'>
                    <ProfileImageBox className='profileImageBox'>
                        {userDetails?.photoURL ? 
                            <img src={userDetails?.photoURL} alt='' /> : 
                            <AccountCircleSharpIcon />
                        }
                    </ProfileImageBox>
                </ProfileImage>

                <ProfileDetails>
                    <ProfileDetailsTopRow>
                        <h4>
                            {userDetails?.username}
                        </h4>

                        <EditProfileButton onClick={() => navigate('/accounts/edit/')}>
                            Edit profile
                        </EditProfileButton>

                        <SettingsOutlinedIcon />
                    </ProfileDetailsTopRow>

                    <ProfileDetailsMidRow>
                        <h4><span>0</span> posts</h4>

                        <h4 className='midRowButton'>
                            <span>0</span> followers
                        </h4>
                        
                        <h4 className='midRowButton'>
                            <span>0</span> following
                        </h4>
                    </ProfileDetailsMidRow>

                    <ProfileDetailsBottomRow>
                        <h3>
                            {userDetails?.displayName}
                        </h3>

                        <h4>
                            {userDetails?.bio}
                        </h4>

                        <a href={`https://${userDetails?.link}`} target='_blank' rel='noreferrer noopener'>
                            {userDetails?.link}
                        </a>
                    </ProfileDetailsBottomRow>
                </ProfileDetails>
            </ProfileSnippet>

            <ProfileSnippetResponsive>
                <ProfileDetailsResponsive>
                    <ProfileDetailsTop>
                        <ProfileImageResponsive className='profileImage'>
                            <ProfileImageBoxResponsive className='profileImageBox'>
                                {userDetails?.photoURL ? 
                                    <img src={userDetails?.photoURL} alt='' /> : 
                                    <AccountCircleSharpIcon />
                                }
                            </ProfileImageBoxResponsive>
                        </ProfileImageResponsive>

                        <ProfileAction>
                            <ProfileTopText>
                                <h4>
                                    {userDetails?.username}
                                </h4>

                                <span>
                                    <SettingsOutlinedIcon />
                                </span>
                            </ProfileTopText>

                            <EditProfileButtonResponsive onClick={() => navigate('/accounts/edit/')}>
                                Edit profile
                            </EditProfileButtonResponsive>
                        </ProfileAction>
                    </ProfileDetailsTop>

                    <ProfileDetailsBottomRowResponsive>
                        <h3>
                            {userDetails?.displayName}
                        </h3>

                        <h4>
                            {userDetails?.bio}
                        </h4>

                        <a href={`https://${userDetails?.link}`} target='_blank' rel='noreferrer noopener'>
                            {userDetails?.link}
                        </a>
                    </ProfileDetailsBottomRowResponsive>
                </ProfileDetailsResponsive>
            </ProfileSnippetResponsive>
        </>
    );
}

const ProfileSnippet = styled.div`
    display: none;

    @media (min-width: 736px) {
        display: flex;
    }
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

    > .MuiSvgIcon-root {
        height: 99%;
        width: 99%;
        color: #454545;
        cursor: pointer;
    }
`;

const ProfileDetails = styled.div`
    flex: 0.7;
    margin-left: 30px;
    display: block;
`;

const ProfileDetailsTopRow = styled.div`
    align-items: center;
    padding: 4px 0;
    display: flex;

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
    text-align: center;
    padding: 20px 0;
    display: flex;

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
        margin-top: 3px;
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



const ProfileSnippetResponsive = styled.div`
    display: flex;

    @media (min-width: 736px) {
        display: none;
    }
`;

const ProfileDetailsResponsive = styled.div`
    flex: 0.7;
    display: block;
`;

const ProfileImageResponsive = styled.div`
    flex: 0.332;
    display: flex;
`;

const ProfileImageBoxResponsive = styled.div`
    height: 77px;
    width: 77px;
    margin: auto;

    > img {
        height: 99%;
        width: 99%;
        border: 0.8px solid gray;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }

    > .MuiSvgIcon-root {
        height: 99%;
        width: 99%;
        color: #454545;
        cursor: pointer;
    }
`;

const ProfileDetailsTop = styled.div`
    align-items: center;
    padding: 4px 0;
    display: flex;
`;

const ProfileAction = styled.div`
    margin-left: 30px;
`;

const ProfileTopText = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        font-size: 20px;
        font-weight: 400;
        color: #222222;
    }

    > span {
        margin-left: 5px;

        > .MuiSvgIcon-root {
            margin-top: 5px;
            font-size: 22px;
            cursor: pointer;
        }
    }
`;

const EditProfileButtonResponsive = styled.button`
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    align-items: center;
    border: none;
    outline: none;
    margin-top: 15px;
    padding: 7px 0;
    width: 240px;
    background-color: rgb(239, 239, 239);
    align-items: center;
    font-family: var(--profile-font);

    :hover {
        background-color: rgb(220, 220, 220);
        cursor: pointer;
    }
`;

const ProfileDetailsBottomRowResponsive = styled.div`
    font-family: var(--profile-font);
    margin-top: 20px;

    > h3 {
        font-size: 14px;
        font-weight: 600;
    }

    > h4 {
        margin-top: 3px;
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
