import React from 'react';
import styled from 'styled-components';

export default function HomeHeader() {
    return (
        <HomeHeaderContainer>
            <img 
                className='full-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png' 
                alt='instagram' 
            />
        </HomeHeaderContainer>
    )
}

const HomeHeaderContainer = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: 1px solid lightgray;
    background-color: white;

    @media (min-width: 767px) {
        display: none;
    }

    > .full-logo {
        width: 106px;
        margin-left: 12px;
        margin-top: 11px;
        margin-bottom: 11px;
        cursor: pointer;
    }
`;
