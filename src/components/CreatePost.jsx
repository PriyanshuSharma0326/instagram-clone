import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from "uuid";

import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import firebase from 'firebase/compat/app';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import db, { storage } from '../lib/config/firebase';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

export default function CreatePost() {
    const navigate = useNavigate();

    const { userDetails } = useContext(UserContext);

    const [isImage, setIsImage] = useState(false);

    const [description, setDescription] = useState(null);
    const [location, setLocation] = useState(null);
    const [selectedMedia, setSelectedMedia] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedMedia) {
            try {
                const storageRef = ref(storage, `${uuidv4()}`);
    
                await uploadBytesResumable(storageRef, selectedMedia)
                .then(() => {
                    getDownloadURL(storageRef).then(async (downloadURL) => {
                        try {
                            await setDoc(doc(db, 'userPosts', uuidv4()), {
                                author: userDetails?.username,
                                descriptionText: description,
                                postLocation: location,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                postURL: downloadURL,
                                authorPhotoURL: userDetails?.photoURL,
                                postType: isImage ? 'image' : 'video'
                            });
                            // await db.collection('users').doc(userDetails?.uid)
                            // .collection('posts').add({
                            //     author: userDetails?.username,
                            //     descriptionText: description,
                            //     postLocation: location,
                            //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            //     postURL: downloadURL,
                            //     authorPhotoURL: userDetails?.photoURL,
                            //     postType: isImage ? 'image' : 'video'
                            // });

                            navigate('/');
                        }
                        catch (error) {
                            console.log(error);
                        }
                    });
                });
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            console.log('Error Posting!');
        }
    }

    const mediaChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedMedia(e.target.files[0]);

            if (e.target.files[0]['type'].split('/')[0] === 'image') {
                setIsImage(true);
            }
        }
    };

    return (
        <CreatePostContainer>
            <FormContainer>
                <FormHeader>
                    <h4>Create a post</h4>
                    <span onClick={handleSubmit}>Share</span>
                </FormHeader>

                <PostContainer>
                    <PostMediaContainer>
                        <input id='postMedia' accept='image/*,video/*' type='file' onChange={mediaChange} />

                        {selectedMedia ? (
                            <MediaPreview>
                                {<img
                                    src={URL.createObjectURL(selectedMedia)}
                                    alt=''
                                />}
                                {!isImage && <video controls >
                                    <source src={URL.createObjectURL(selectedMedia)} type="video/mp4"/>
                                </video>}
                            </MediaPreview>) : 
                            <label htmlFor='postMedia'>
                                <AddPhotoAlternateRoundedIcon />
                            </label>
                        }
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

                        <textarea placeholder='Description' 
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <input placeholder='Location' type='text' 
                            onChange={(e) => setLocation(e.target.value)}
                        />
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

const MediaPreview = styled.div`
    display: flex;
    flex-direction: column;

    > img, video {
        max-width: 100%;
        max-height: 100%;
    }
`;

const PostMetadataContainer = styled.div`
    flex: 0.5;
    background-color: white;

    > textarea {
        display: block;
        overflow: visible;
        width: calc(100% - 10px);
        padding: 5px;
        border: none;
        outline: none;
        resize: vertical;
        border: none;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    > input {
        width: calc(100% - 5px);
        padding: 5px 0 5px 5px;
        margin-top: 15px;
        border: none;
        outline: none;
    }
`;
