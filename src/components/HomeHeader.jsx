import React from 'react';
import styled from 'styled-components';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function HomeHeader() {
    return (
        <HomeHeaderContainer>
            <h1 className='full-logo'>Clonegram</h1>

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

    > h1 {
        font-size: 26px;
        margin-left: 12px;
        margin-top: 11px;
        margin-bottom: 11px;
        text-align: center;
        cursor: pointer;
        font-family: var(--logo-font);
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
