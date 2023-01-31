import React from 'react';
import styled from 'styled-components';
import SuggestionAccount from './SuggestionAccount';

import { useNavigate } from 'react-router-dom';

export default function AccountAndMore() {
    const navigate = useNavigate();

    return (
        <AccountAndMoreContainer>
            <AccountSnippet>
                <ImageContainer>
                    <img 
                        onClick={() => {navigate('/virat.kohli/');}}
                        src='https://www.mykhel.com/thumb/247x100x233/cricket/players/8/3788.jpg'
                        alt='virat.kohli'
                    />
                </ImageContainer>

                <AccountDesc>
                    <h5 onClick={() => {navigate('/virat.kohli/');}}>virat.kohli</h5>
                    <h4>Virat Kohli</h4>
                </AccountDesc>

                <SwitchLink>
                    Switch
                </SwitchLink>
            </AccountSnippet>

            <SuggestionContainer>
                <SuggestionText>
                    <h2>Suggestions for you</h2>
                    <h3>See All</h3>
                </SuggestionText>

                <SuggestionAccount />
                <SuggestionAccount />
                <SuggestionAccount />
                <SuggestionAccount />
            </SuggestionContainer>
        </AccountAndMoreContainer>
    );
}

const AccountAndMoreContainer = styled.div`
    padding: 55px 0 0 65px;
`;

const ImageContainer = styled.div`
    line-height: 0%;

    > img {
        height: 57px;
        width: 57px;
        object-fit: cover;
        border: 0.5px solid lightgray;
        border-radius: 50%;
        cursor: pointer;
    }
`;

const AccountSnippet = styled.div`
    display: flex;
    width: 320px;
    align-items: center;
`;

const AccountDesc = styled.div`
    margin-left: 15px;

    > h4 {
        font-size: 14px;
        font-weight: 400;
        color: #999999;
    }

    > h5 {
        font-size: 14px;
        font-weight: 500;
        margin-top: 3px;
        color: #222222;
        cursor: pointer;
    }
`;

const SwitchLink = styled.div`
    margin-left: auto;

    font-size: 12px;
    font-weight: 600;
    color: #0095f6;
    
    :hover {
        color: #0074cc;
        cursor: pointer;
    }
`;

const SuggestionContainer = styled.div`
    margin-top: 10px;
`;

const SuggestionText = styled.div`
    display: flex;
    padding-bottom: 6px;

    > h2 {
        font-size: 14px;
        font-weight: 600;
        margin-top: 3px;
        color: #888888;
    }

    > h3 {
        font-size: 12px;
        font-weight: 600;
        margin-top: 5px;
        margin-left: auto;

        :hover {
            cursor: pointer;
            color: #999999;
        }
    }
`;
