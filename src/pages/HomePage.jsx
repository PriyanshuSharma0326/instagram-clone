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
    display: flex;
    overflow-y: scroll;
`;

const ContentContainer = styled.div`
    margin-left: 208px;
    width: 470px;
`;
