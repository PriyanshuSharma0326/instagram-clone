import React, { useContext } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/config/firebase';
import { UserContext } from '../context/UserContext';

export default function SidebarOptions({ Icon, title, profilePage, homePage, createButton, moreButton }) {
    const navigate = useNavigate();

    const { userDetails } = useContext(UserContext);
    
    return (
        <SidebarOptionContainer 
            onClick={
                (profilePage && (() => {navigate(`/${userDetails?.username}/`);})) || 
                (homePage && (() => {navigate('/');})) || 
                (createButton && (() => {navigate('/create/');})) || 
                (moreButton && (() => {auth.signOut(); navigate('/');}))}
        >
            <SidebarOption>
                {Icon && <Icon />}

                {Icon ? <h3>{title}</h3> : null}
            </SidebarOption>
        </SidebarOptionContainer>
    );
}

const SidebarOptionContainer = styled.div`
    padding: 4px 0 4px 0;
    width: 48px;

    @media (min-width: 1264px) {
        width: 218px;
    }
`;

const SidebarOption = styled.div`
    display: flex;
    align-items: center;
    border-radius: 50px;

    > h3 {
        font-size: 16px;
        font-weight: 400;
        margin-left: 4px;
        margin-bottom: 2px;
        display: none;

        @media (min-width: 1264px) {
            display: block;
        }
    }

    > .MuiSvgIcon-root {
        font-size: 30px;
        padding: 9px;
    }

    :hover {
        background-color: #F9F9F9;
        cursor: pointer;
    }
`;
