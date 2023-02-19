import React, { useState } from 'react';
import styled from 'styled-components';

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Post({ username, day, location, imgURL, description }) {
    const [fullDesc, setFullDesc] = useState(false);

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

                <HeaderText>
                    <HeaderTextTop>
                        <h4>{username}</h4>

                        <FiberManualRecordIcon />

                        <h5>{day}d</h5>
                    </HeaderTextTop>

                    {location && <h5>{location}</h5>}
                </HeaderText>

                <MoreHorizIcon className='options' />
            </PostHeader>

            <PostImage>
                <img className='test5' src={imgURL} alt='post' />
            </PostImage>
            
            <PostAction>
                <FavoriteBorderRoundedIcon />
                <ModeCommentOutlinedIcon />
                <NearMeOutlinedIcon />

                <BookmarkBorderOutlinedIcon className='bookmark' />
            </PostAction>

            <PostFooter>
                <PostDesc>
                    {/* <DescriptionContainer> */}
                        <span id='username'>{username}</span>

                        <h5>
                            {!fullDesc ? truncate(description, 30) : description}
                        </h5>

                        {check(description) && !fullDesc && <span onClick={() => setFullDesc(true)}>more</span>}

                        {check(description) && fullDesc && <span onClick={() => setFullDesc(false)}>less</span>}
                    {/* </DescriptionContainer> */}
                </PostDesc>
            </PostFooter>
        </PostContainer>
    );
}

const PostContainer = styled.div`
    display: block;
    border-bottom: 1px solid lightgray;
    padding: 15px 0;
`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;

    > .MuiSvgIcon-root {
        font-size: 38px;
        padding: 9px 9px 9px 2px;
        cursor: pointer;
    }

    .options {
        font-size: 20px;
        margin-left: auto;
        padding: unset;

        :hover {
            color: rgb(142, 142, 142);
        }
    }
`;

const HeaderText = styled.div`
    > h5 {
        font-size: 12px;
        font-weight: 400;
        color: rgb(38, 38, 38);
        cursor: pointer;
    }
`;

const HeaderTextTop = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        font-size: 14px;
        font-weight: 500;
        color: #222222;
        cursor: pointer;

        :hover {
            color: rgb(142, 142, 142);
        }
    }

    > .MuiSvgIcon-root {
        font-size: 5.5px;
        margin-left: 7px;
        margin-right: 5px;
        color: rgb(142, 142, 142);
    }

    > h5 {
        color: rgb(142, 142, 142);
        font-size: 14px;
        font-weight: 400;
    }
`;

const PostImage = styled.div`
    line-height: 0%;

    img {
        width: 99.5%;
        border-radius: 3px;
        cursor: pointer;
        border: 1px solid lightgray;
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

    .bookmark {
        margin-left: auto;
        margin-right: unset;
    }
`;

const PostFooter = styled.div`

`;

const PostDesc = styled.div`
    display: block;
    align-items: center;

    > #username {
        display: inline;
        font-size: 14px;
        font-weight: 500;
        margin-top: 3px;
        color: #222222;
        cursor: pointer;
    }

    > h5 {
        display: inline;
        font-size: 14px;
        font-weight: 400;
        margin-top: 4px;
        margin-left: 5px;
    }

    > span {
        font-size: 14px;
        font-weight: 400;
        display: inline;
        margin-left: 5px;
        color: #888888;
        cursor: pointer;
    }
`;
