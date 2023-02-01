import React from 'react'
import styled from 'styled-components';

import SidebarOptions from './SidebarOptions';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';

export default function Sidebar() {
    return (
        <SidebarContainer>
            <img 
                className='logo'
                src='https://cdn-icons-png.flaticon.com/512/87/87390.png' 
                alt='instagram' 
            />

            <img 
                className='full-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png' 
                alt='instagram' 
            />

            <SidebarOptions 
                homePage
                Icon={HomeRoundedIcon} 
                title='Home' 
            />
            <SidebarOptions Icon={SearchRoundedIcon} title='Search' />
            <SidebarOptions Icon={ExploreOutlinedIcon} title='Explore' />
            <SidebarOptions Icon={VideoLibraryOutlinedIcon} title='Reels' />
            <SidebarOptions Icon={MessageOutlinedIcon} title='Messages' />
            <SidebarOptions Icon={FavoriteBorderRoundedIcon} title='Notifications' />
            <SidebarOptions Icon={LocalHospitalOutlinedIcon} title='Create' />
            <SidebarOptions 
                profilePage
                Icon={AccountCircleRoundedIcon} 
                title='Profile' 
            />
            
            <MoreButton>
                <SidebarOptions Icon={DensityMediumOutlinedIcon} title='More' />
            </MoreButton>
        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
    color: black;
    background-color: white;
    padding: 0 13px;
    border-right: 1px solid lightgray;
    display: none;

    @media (min-width: 767px) {
        display: block;
    }
    
    > .logo {
        width: 25px;
        margin-left: 10px;
        margin-top: 35px;
        margin-bottom: 42px;
        cursor: pointer;
        display: block;

        @media (min-width: 1264px) {
            display: none;
            margin-bottom: 25px;
        }
    }

    > .full-logo {
        width: 110px;
        margin-left: 10px;
        margin-top: 35px;
        margin-bottom: 25px;
        cursor: pointer;
        display: none;

        @media (min-width: 1264px) {
            display: block;
        }
    }
`;

const MoreButton = styled.div`
    margin-top: 90px;
`;
