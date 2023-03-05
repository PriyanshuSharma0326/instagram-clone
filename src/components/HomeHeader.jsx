import React from 'react';
import styled from 'styled-components';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function HomeHeader() {
    return (
        <HomeHeaderContainer>
            <img 
                className='full-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png' 
                alt='instagram' 
            />

            <SearchBox>
                <SearchButton>
                    <SearchRoundedIcon />
                </SearchButton>

                <input placeholder='Search' />
            </SearchBox>

            <FavoriteBorderRoundedIcon />
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
    align-items: center;

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

    > .MuiSvgIcon-root {
        font-size: 24px;
        margin-right: 20px;
        margin-left: 5px;
        cursor: pointer;
    }
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    height: 36px;
    width: 45%;
    padding: 0 16px;
    margin-right: 12px;
    border-radius: 8px;
    background-color: rgb(239, 239, 239);

    > input {
        flex: 0.9;
        height: 22px;
        border: none;
        outline: none;
        background-color: inherit;
        padding-top: 4px;

        ::placeholder {
            font-size: 17px;
            font-family: var(--profile-font);
            font-weight: 300;
        }
    }
`;

const SearchButton = styled.div`
    flex: 0.1;
    height: 24px;

    > .MuiSvgIcon-root {
        font-size: 20px;
        margin-top: 2px;
        color: gray;
    }
`;
