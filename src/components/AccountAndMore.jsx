import React, { useContext } from 'react';
import styled from 'styled-components';
import SuggestionAccount from './SuggestionAccount';

import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../lib/config/firebase';

export default function AccountAndMore() {
    const navigate = useNavigate();

    const { userDetails } = useContext(UserContext);

    const [suggestedUsers] = useCollection(db.collection('users'));

    return (
        <AccountAndMoreContainer>
            <AccountSnippet>
                <ImageContainer>
                    {userDetails?.photoURL ? 
                        <img 
                            onClick={() => {navigate(`/${userDetails?.username}/`);}}
                            src={userDetails?.photoURL}
                            alt=''
                        /> : 
                        <AccountCircleSharpIcon />
                    }
                </ImageContainer>

                <AccountDesc>
                    <h5 onClick={() => {navigate(`/${userDetails?.username}/`);}}>{userDetails?.username}</h5>
                    <h4>{userDetails?.displayName}</h4>
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

                {suggestedUsers?.docs.map((doc) => (
                    (doc.id !== userDetails.uid) && 
                    <SuggestionAccount 
                        key={doc.id} 
                        username={doc.data().username} 
                        photoURL={doc.data().photoURL}
                    />
                ))}
            </SuggestionContainer>
        </AccountAndMoreContainer>
    );
}

const AccountAndMoreContainer = styled.div`
    margin-top: 55px;
    margin-left: 65px;
    display: none;

    @media (min-width: 1160px) {
        display: block;
    }
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

    > .MuiSvgIcon-root {
        height: 60px;
        width: 60px;
        color: #454545;
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
