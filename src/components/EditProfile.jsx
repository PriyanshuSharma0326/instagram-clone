import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import { UserContext } from '../context/UserContext';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import db, { storage } from '../lib/config/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
    const navigate = useNavigate();
    const { userDetails } = useContext(UserContext);

    const [name, setName] = useState(userDetails?.displayName);
    const [uname, setUname] = useState(userDetails?.username);
    const [website, setWebsite] = useState(userDetails?.link);
    const [description, setDescription] = useState(userDetails?.bio);
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (file) {
            try {
                const storageRef = ref(storage, `${uname}`);
    
                await uploadBytesResumable(storageRef, file)
                .then(() => {
                    getDownloadURL(storageRef).then(async (downloadURL) => {
                        try {
                            await updateDoc(doc(db, 'users', userDetails?.uid), {
                                bio: description,
                                displayName: name,
                                link: website,
                                photoURL: downloadURL
                            });

                            navigate(`/${userDetails?.username}/`);
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
            try {
                await updateDoc(doc(db, 'users', userDetails?.uid), {
                    bio: description,
                    displayName: name,
                    link: website,
                    username: uname,
                });

                navigate(`/${userDetails?.username}/`);
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <EditProfileContainer>
            <BoxContainer>
                <EditForm>
                    <EditImageContainer>
                        <ImageContainer>
                            {userDetails?.photoURL ? 
                                <label htmlFor='fileUpload'>
                                    <img src={userDetails?.photoURL} alt='' />
                                </label> : 
                                <label htmlFor='fileUpload'>
                                    <AccountCircleSharpIcon />
                                </label>
                            }
                        </ImageContainer>

                        <InfoContainer>
                            <h3>{userDetails?.username}</h3>

                            <input type='file' id='fileUpload' 
                                onChange={(e) => setFile(e.target.files[0])}
                            />

                            <label htmlFor='fileUpload'>Change profile photo</label>
                        </InfoContainer>
                    </EditImageContainer>

                    <InputContainer>
                        <LabelContainer>
                            <h3>Name</h3>
                        </LabelContainer>

                        <TextContainer>
                            <input defaultValue={userDetails?.displayName} placeholder='Name' type='text' 
                                onChange={(e) => setName(e.target.value)}
                            />

                            <h5>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</h5>
                        </TextContainer>
                    </InputContainer>

                    <InputContainer>
                        <LabelContainer>
                            <h3>Username</h3>
                        </LabelContainer>

                        <TextContainer>
                            <input defaultValue={userDetails?.username} placeholder='Username' type='text' 
                                onChange={(e) => setUname(e.target.value)} 
                                required
                            />

                            <h5>Change your username.</h5>
                        </TextContainer>
                    </InputContainer>

                    <InputContainer>
                        <LabelContainer>
                            <h3>Website</h3>
                        </LabelContainer>

                        <TextContainer>
                            <input defaultValue={userDetails?.link} placeholder='Website' type='url' 
                                onChange={(e) => setWebsite(e.target.value)}
                            />

                            <h5>Edit the website in your bio.</h5>
                        </TextContainer>
                    </InputContainer>

                    <InputContainer>
                        <LabelContainer>
                            <h3>Bio</h3>
                        </LabelContainer>

                        <TextContainer>
                            <textarea defaultValue={userDetails?.bio} maxLength={150} 
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <h5>
                                {(description !== undefined) ? description?.length : userDetails?.bio.length}/150
                            </h5>
                        </TextContainer>
                    </InputContainer>

                    <button onClick={handleSubmit}>Submit</button>
                </EditForm>
            </BoxContainer>
        </EditProfileContainer>
    );
}

const EditProfileContainer = styled.div`
    flex: 0.84;
    flex-grow: 1;
    display: flex;
    overflow-y: scroll;
    background-color: rgb(250, 250, 250);
`;

const BoxContainer = styled.div`
    margin: 50px auto auto auto;
    width: 400px;

    @media (min-width: 736px) {
        width: 550px;
        margin: auto;
    }
`;

const EditForm = styled.div`
    margin: auto;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 1px;

    > img {
        display: block;
        margin: 0 auto;
        width: 174px;
        cursor: pointer;
        padding: 30px 0;
    }

    > button {
        display: block;
        outline: none;
        border: none;
        width: 77.35px;
        height: 32px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 8px;
        font-family: var(--profile-font);
        background-color: rgb(0, 149, 246);
        color: white;
        margin-left: 20px;
        margin-bottom: 20px;

        :hover {
            background-color: #1877F2;
            cursor: pointer;
        }

        @media (min-width: 768px) {
            margin-left: 170px;
        }
    }
`;

const EditImageContainer = styled.div`
    display: flex;
    padding: 10px 0 0 0;

    @media (min-width: 768px) {
        padding: 20px 0;
    }
`;

const ImageContainer = styled.div`
    > label {
        display: flex;

        > img {
            margin-left: 20px;
            display: block;

            height: 45px;
            width: 45px;
            object-fit: cover;
            border: 0.5px solid lightgray;
            border-radius: 50%;
            cursor: pointer;

            @media (min-width: 768px) {
                margin-left: auto;
            }
        }

        > .MuiSvgIcon-root {
            margin-left: 15px;
            display: block;

            height: 45px;
            width: 45px;
            cursor: pointer;
            color: #454545;

            @media (min-width: 768px) {
                margin-left: auto;
            }
        }
    }

    @media (min-width: 768px) {
        width: 150px;
    }
`;

const InfoContainer = styled.div`
    margin: auto 0 auto 20px;

    > h3 {
        font-weight: 400;
        font-size: 16px;
    }

    > label {
        font-weight: 600;
        font-size: 14px;
        color: rgb(0, 149, 246);

        :hover {
            color: #1D3C78;
            cursor: pointer;
        }
    }

    #fileUpload {
        display: none;
    }
`;

const InputContainer = styled.div`
    display: block;
    padding: 10px 0;

    @media (min-width: 768px) {
        display: flex;
        padding: 20px 0;
    }
`;

const LabelContainer = styled.div`
    width: 150px;
    display: flex;

    > h3 {
        margin-left: 20px;
        display: block;
        padding: 5px 0;
        font-size: 16px;
        font-weight: 600;

        @media (min-width: 768px) {
            margin-left: auto;
            padding: unset;
        }
    }
`;

const TextContainer = styled.div`
    width: 333px;
    margin-left: 20px;

    > input {
        display: block;
        height: 30px;
        outline: none;
        border: 1px solid lightgray;
        border-radius: 3px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 5px;
        padding-left: 10px;

        ::placeholder {
            font-size: 16px;
            font-weight: 200;
            font-family: var(--profile-font);
        }
    }

    > textarea {
        display: block;
        height: 30px;
        outline: none;
        border: 1px solid lightgray;
        border-radius: 3px;
        width: 100%;
        margin-bottom: 5px;
        padding-left: 10px;
        resize: vertical;
    }

    > h5 {
        width: 100%;
        color: rgb(142, 142, 142);
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
    }
`;
