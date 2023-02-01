import React from 'react'
import styled from 'styled-components';

export default function AppFooter() {
    return (
        <AppFooterContainer>AppFooter</AppFooterContainer>
    );
}

const AppFooterContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid lightgray;
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