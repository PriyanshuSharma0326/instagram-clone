import React from 'react';
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

// import { UserContext } from '../context/UserContext';

export default function Sidebar() {
    // const { userDetails } = useContext(UserContext);

    return (
        <SidebarContainer>
            <img 
                className='logo'
                src='https://cdn3d.iconscout.com/3d/premium/thumb/chat-emoticon-laugh-5670884-4724172.png' 
                alt='instagram' 
            />

            <h1 className='full-logo'>Clonegram</h1>

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
            <SidebarOptions 
                createButton
                Icon={LocalHospitalOutlinedIcon} 
                title='Create' 
            />
            <SidebarOptions 
                profilePage
                Icon={AccountCircleRoundedIcon}
                title='Profile' 
            />
            
            <MoreButton>
                <SidebarOptions 
                    moreButton
                    Icon={DensityMediumOutlinedIcon} 
                    title='More' 
                />
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

    > h1 {
        font-size: 26px;
        margin-left: 10px;
        margin-top: 35px;
        margin-bottom: 25px;
        text-align: center;
        cursor: pointer;
        font-family: var(--logo-font);
    }

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
