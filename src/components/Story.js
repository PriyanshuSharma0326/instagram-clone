import React from 'react';
import styled from 'styled-components';

export default function Story({ imgURL, username }) {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return (
        <StoryContainer>
            <StoryImageContainer>
                <img 
                    src={imgURL}
                    alt='story' 
                />
            </StoryImageContainer>

            <StoryUser>
                <h4>{truncate(username, 11)}</h4>
            </StoryUser>
        </StoryContainer>
    );
}

const StoryContainer = styled.div`
    width: 71px;
    margin-right: 9px;
    margin-left: 3px;

    :hover {
        cursor: pointer;
    }

    @media (min-width: 767px) {
        margin-right: 11px;
        margin-left: auto;
    }

    @media (min-width: 1160px) {
        margin-left: unset;
    }
`;

const StoryUser = styled.div`
    text-align: center;

    > h4 {
        font-size: 12px;
        font-weight: 400;
    }
`;

const StoryImageContainer = styled.div`
    width: 66px;
    height: 70px;
    margin-left: 2.5px;

    > img {
        height: 56.5px;
        width: 56.5px;
        margin-top: 4px;
        margin-left: 2px;
        object-fit: cover;
        border-radius: 50%;
        padding: 2px;
        border: 2px solid red;
    }
`;
