import React, { useContext } from 'react';
import styled from 'styled-components';

import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import { UserContext } from '../context/UserContext';

export default function CreatePost() {
    const { userDetails } = useContext(UserContext);

    return (
        <CreatePostContainer>
            <FormContainer>
                <FormHeader>
                    <h4>Create a post</h4>
                    <span>Share</span>
                </FormHeader>

                <PostContainer>
                    <PostMediaContainer>
                        <input id='postMedia' type='file' />

                        <label htmlFor='postMedia'>
                            <AddPhotoAlternateRoundedIcon />
                        </label>
                    </PostMediaContainer>

                    <PostMetadataContainer>
                        <AccountSnippet>
                            <ImageContainer>
                                {userDetails?.photoURL ? 
                                    <img 
                                        src={userDetails?.photoURL}
                                        alt=''
                                    /> : 
                                    <AccountCircleSharpIcon />
                                }
                            </ImageContainer>

                            <AccountDesc>
                                <h5>{userDetails?.username}</h5>
                            </AccountDesc>
                        </AccountSnippet>

                        <textarea placeholder='Description' />

                        <input placeholder='Location' type='text' />
                    </PostMetadataContainer>
                </PostContainer>
            </FormContainer>
        </CreatePostContainer>
    );
}

const CreatePostContainer = styled.div`
    flex: 0.84;
    flex-grow: 1;
    display: flex;
    overflow-y: scroll;
    background-color: rgb(250, 250, 250);
`;

const FormContainer = styled.div`
    margin: auto;
    width: 600px;
    border: 1px solid gray;

    /* @media (min-width: 768px) {
        width: 550px;
    } */
`;

const FormHeader = styled.div`
    display: flex;
    background-color: white;
    height: 30px;
    align-items: center;
    border-bottom: 1px solid gray;
    
    > h4 {
        margin: auto;
        font-size: 16px;
        font-weight: 600;
    }

    > span {
        margin-right: 5px;
        font-size: 14px;
        font-weight: 600;
        color: rgb(0, 149, 246);

        :hover {
            color: #1D3C78;
            cursor: pointer;
        }
    }
`;

const PostContainer = styled.div`
    display: flex;
`;

const AccountSnippet = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin: 10px 0;
`;

const ImageContainer = styled.div`
    line-height: 0%;
    margin-left: 10px;

    > img {
        height: 40px;
        width: 40px;
        object-fit: cover;
        border: 0.5px solid lightgray;
        border-radius: 50%;
    }

    > .MuiSvgIcon-root {
        height: 42px;
        width: 42px;
        color: #454545;
    }
`;

const AccountDesc = styled.div`
    margin-left: 15px;

    > h5 {

        font-size: 14px;
        font-weight: 500;
        color: #222222;
    }
`;

const PostMediaContainer = styled.div`
    flex: 0.5;
    background-color: rgb(250, 250, 250);
    display: flex;
    cursor: pointer;

    #postMedia {
        display: none;
    }

    > label {
        margin: auto;

        .MuiSvgIcon-root {
            font-size: 60px;
            color: gray;
            cursor: pointer;
        }
    }
`;

const PostMetadataContainer = styled.div`
    flex: 0.5;
    background-color: white;

    > textarea {
        width: 100%;
        border: none;
    }

    > input {
        width: 100%;
        border: none;
    }
`;
