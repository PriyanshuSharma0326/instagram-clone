import React from 'react';
import styled from 'styled-components';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import { useNavigate } from 'react-router-dom';

export default function SuggestionAccount({ username, photoURL }) {
    // const navigate = useNavigate();

    return (
        <SuggestionAccountContainer>
            <SuggestionAccountPreview>
                {photoURL ? 
                    <img 
                        // onClick={() => {navigate(`/${username}/`);}}
                        src={photoURL}
                        alt=''
                    /> : 
                    <AccountCircleRoundedIcon />
                }

                <SuggestionAccountDesc>
                    <h5 
                        // onClick={() => {navigate(`/${username}/`);}}
                    >
                        {username}
                    </h5>
                    <h6>New to Instagram</h6>
                </SuggestionAccountDesc>

                <FollowButton>
                    Follow
                </FollowButton>
            </SuggestionAccountPreview>
        </SuggestionAccountContainer>
    );
}

const SuggestionAccountContainer = styled.div`
`;

const SuggestionAccountDesc = styled.div`
    margin-left: 2px;

    > h5 {
        font-size: 14px;
        font-weight: 500;
        color: #222222;
        cursor: pointer;
    }

    > h6 {
        font-size: 12px;
        font-weight: 400;
        color: #999999;
    }
`;

const FollowButton = styled.div`
    margin-left: auto;

    font-size: 12px;
    font-weight: 600;
    color: #0095f6;
    
    :hover {
        color: #0074cc;
        cursor: pointer;
    }
`;

const SuggestionAccountPreview = styled.div`
    display: flex;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 38px;
        padding: 5px 9px 5px 0;
        color: #454545;
        cursor: pointer;
    }

    > img {
        height: 30px;
        width: 30px;
        margin: 9px 11px 9px 4px;
        object-fit: cover;
        border: 0.5px solid lightgray;
        border-radius: 50%;
        cursor: pointer;
    }
`;
