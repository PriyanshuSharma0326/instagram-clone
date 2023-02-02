import React from 'react'
import styled from 'styled-components';
import AccountAndMore from '../components/AccountAndMore';
import Posts from '../components/Posts';
import Stories from '../components/Stories';

export default function HomePage() {
    return (
        <HomePageContainer>
            <ContentContainer>
                <Stories />

                <Posts />
            </ContentContainer>
            
            <AccountAndMore />
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div`
    flex: 0.84;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
    margin-bottom: 48px;

    @media (min-width: 767px) {
        display: flex;
        margin-top: unset;
        margin-bottom: unset;
    }
`;

const ContentContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    /* padding-bottom: 24px; */
    width: 472px;

    @media (min-width: 1000px) {
        margin-left: 16.5%;
        margin-right: unset;
        padding-top: unset;
        padding-bottom: unset;
    }
`;
