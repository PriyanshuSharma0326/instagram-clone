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
            <img src='https://www.pngitem.com/pimgs/m/132-1327993_instagram-logo-word-png-transparent-png.png' alt='instagram' />

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

            <SidebarOptions Icon={DensityMediumOutlinedIcon} title='More' />
        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
    color: black;
    background-color: white;
    flex: 0.16;
    width: 250px;
    border-right: 1px solid lightgray;
    height: 100vh;

    > img {
        width: 110px;
        margin-left: 20px;
        margin-top: 35px;
        margin-bottom: 25px;
    }
`;


