import React, { useContext } from 'react'
import styled from 'styled-components';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function AppFooter() {
    const navigate = useNavigate();

    const { userDetails } = useContext(UserContext);

    return (
        <AppFooterContainer>
            <IconsContainer>
                <IconContainer onClick={() => {navigate('/');}}>
                    <HomeRoundedIcon />
                </IconContainer>

                <IconContainer>
                    <ExploreOutlinedIcon />
                </IconContainer>

                <IconContainer>
                    <VideoLibraryOutlinedIcon />
                </IconContainer>

                <IconContainer>
                    <LocalHospitalOutlinedIcon />
                </IconContainer>

                <IconContainer>
                    <MessageOutlinedIcon />
                </IconContainer>

                <IconContainer onClick={() => {navigate(`/${userDetails?.username}/`);}}>
                    <AccountCircleRoundedIcon />
                </IconContainer>
            </IconsContainer>
        </AppFooterContainer>
    );
}

const AppFooterContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 47px;
    border-top: 1px solid lightgray;
    background-color: white;

    @media (min-width: 767px) {
        display: none;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 18px;

    @media (min-width: 488px) {
        gap: 40px;
    }
`;

const IconContainer = styled.div`
    display: flex;
    width: 48px;
    /* margin-right: 45px; */

    > .MuiSvgIcon-root {
        font-size: 30px;
        margin: auto;

        :hover {
            cursor: pointer;
            font-size: 31px;
        }
    }

    :last-child {
        margin-right: 0;
    }
`;
