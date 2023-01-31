import React from 'react';
import styled from 'styled-components';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function Post({ username, imgURL, description }) {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + ' ...' : string;
    }

    function check(string) {
        return string?.length > 29;
    }

    return (
        <PostContainer>
            <PostHeader>
                <AccountCircleRoundedIcon />

                <h4>{username}</h4>
            </PostHeader>

            <PostImage>
                <img className='test5' src={imgURL} alt='post' />
            </PostImage>
            
            <PostAction>
                <FavoriteBorderRoundedIcon />
                <ModeCommentOutlinedIcon />
                <NearMeOutlinedIcon />

                {/* <BookmarkBorderOutlinedIcon /> */}
            </PostAction>

            <PostFooter>
                <PostDesc>
                    <h4>{username}</h4>
                    <h5>
                        {truncate(description, 29)}
                        {check(description) && <span>more</span>}
                    </h5>
                </PostDesc>
            </PostFooter>
        </PostContainer>
    );
}

const PostContainer = styled.div`
`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 38px;
        padding: 9px 9px 9px 2px;
        cursor: pointer;
    }

    > h4 {
        font-size: 14px;
        font-weight: 500;
        margin-top: 3px;
        color: #222222;
        cursor: pointer;
    }
`;

const PostImage = styled.div`
    line-height: 0%;

    img {
        width: 100%;
        border-radius: 3px;
        cursor: pointer;
    }
`;

const PostAction = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;

    > .MuiSvgIcon-root {
        font-size: 28px;
        margin-right: 10px;
        cursor: pointer;

        :hover {
            opacity: 0.5;
        }
    }
`;

const PostFooter = styled.div`

`;

const PostDesc = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        font-size: 14px;
        font-weight: 500;
        margin-top: 3px;
        color: #222222;
        cursor: pointer;
    }

    > h5 {
        font-size: 14px;
        font-weight: 400;
        margin-top: 4px;
        margin-left: 5px;

        > span {
            margin-left: 5px;
            color: #888888;
            cursor: pointer;
        }
    }
`;
