import React from 'react'
import styled from 'styled-components';
import AccountAndMore from '../components/AccountAndMore';
import AppFooter from '../components/AppFooter';
import HomeHeader from '../components/HomeHeader';
import Posts from '../components/Posts';
import Stories from '../components/Stories';

export default function HomePage() {
    return (
        <HomePageContainer>
            <HomeHeader />

            <ContentContainer>
                <Stories />

                <Posts />
            </ContentContainer>
            
            <AccountAndMore />

            <AppFooter />
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div`
    flex: 0.84;
    flex-grow: 1;
    overflow-y: scroll;
    /* position: relative; */

    @media (min-width: 767px) {
        display: flex;
    }
`;

const ContentContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-top: 60px;
    padding-bottom: 24px;
    width: 472px;

    @media (min-width: 1000px) {
        margin-left: 16.5%;
        margin-right: unset;
        padding-top: unset;
        padding-bottom: unset;
    }
`;
