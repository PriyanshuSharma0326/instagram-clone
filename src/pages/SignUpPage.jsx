import React, { useState } from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';

import db, { auth } from '../lib/config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const email = e.target[0].value;
        const displayName = e.target[1].value;
        const username = e.target[2].value;
        const password = e.target[3].value;

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            try {
                await setDoc(doc(db, 'users', res.user.uid), {
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL: '',
                    username,
                    bio: '',
                    link: '',
                });

                navigate('/');
            }
            catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    return (
        <SignUpPageContainer>
            <BoxContainer>
                <SignUpForm onSubmit={handleSubmit}>
                    <h1>Clonegram</h1>

                    <h2>Sign up to see photos and videos from your friends.</h2>

                    <input placeholder='Email' type='email' />

                    <input placeholder='Full Name' type='text' />

                    <input placeholder='Username' type='text' />

                    <input placeholder='Password' type='password' />

                    <button disabled={loading}>Sign up</button>
                </SignUpForm>

                <LoginBox>
                    <h4>Have an account? <span onClick={() => {navigate('/');}}>Log in</span></h4>
                </LoginBox>

                <AppLinks>
                    <FooterText>
                        <h3>Get the app.</h3>
                    </FooterText>
                    

                    <LinkImages>
                        <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DE48397EE-8F94-433D-B034-CDB40DCF4914%26utm_content%3Dlo%26utm_medium%3Dbadge' target='_blank' rel='noreferrer noopener'>
                            <img src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png' alt='Get it on Google Play' />
                        </a>

                        <a href='ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1020' target='_blank' rel='noreferrer noopener'>
                            <img src='https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png' alt='Get it from Microsoft' />
                        </a>
                    </LinkImages>
                </AppLinks>

                <SocialLinks />
            </BoxContainer>
        </SignUpPageContainer>
    );
}

const SignUpPageContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: rgb(250, 250, 250);
`;

const BoxContainer = styled.div`
    margin: auto;
`;

const SignUpForm = styled.form`
    margin: auto;
    width: 348px;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 1px;

    > h1 {
        font-size: 36px;
        margin: auto;
        text-align: center;
        width: 174px;
        cursor: pointer;
        padding: 30px 0;
        font-family: var(--logo-font);
    }

    > input {
        display: block;
        height: 36px;
        outline: none;
        border: 1px solid lightgray;
        background-color: rgb(250, 250, 250);
        border-radius: 3px;
        width: 254px;
        margin: 0 auto;
        margin-bottom: 5px;
        padding-left: 10px;

        ::placeholder {
            font-size: 12px;
            font-family: var(--profile-font);
        }
    }

    > button {
        display: block;
        outline: none;
        border: none;
        width: 268px;
        height: 32px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 8px;
        font-family: var(--profile-font);
        background-color: #47AFFF;
        color: white;
        margin: 15px auto;
    }

    > h2 {
        display: block;
        text-align: center;
        color: rgb(142, 142, 142);
        font-size: 17px;
        font-weight: 600;
        font-family: var(--profile-font);
        line-height: 20px;
        margin: 0 40px 10px;
    }
`;

const LoginBox = styled.div`
    display: flex;
    margin-top: 10px;
    width: 348px;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 1px;
    padding: 20px 0;

    > h4 {
        color: rgb(38, 38, 38);
        font-size: 14px;
        font-weight: 400;
        margin: 0 auto;

        > span {
            color: rgb(0, 149, 246);
            cursor: pointer;
            text-decoration: none;
        }
    }
`;

const AppLinks = styled.div`
`;

const FooterText = styled.div`
    display: flex;

    > h3 {
        color: rgb(38, 38, 38);
        font-size: 14px;
        font-weight: 400;
        margin: 15px auto;
    }
`;

const LinkImages = styled.div`
    display: flex;

    > a {
        margin: 0 auto;
        line-height: 0%;

        > img {
            height: 40px;
        }
    }
`;
