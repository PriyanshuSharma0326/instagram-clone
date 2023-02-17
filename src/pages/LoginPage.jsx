import React, { useRef } from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';

import { auth } from '../lib/config/firebase';

import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).catch((error) => {
            alert(error.message);
        });

        navigate('/');
    }

    return (
        <LoginPageContainer>
            <BoxContainer>
                <LoginForm>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png' alt='logo' />

                    <input ref={emailRef}  placeholder='Email' type='email' />

                    <input ref={passwordRef} placeholder='Password' type='password' />

                    <button onClick={signIn}>Log in</button>
                </LoginForm>

                <SignUpBox>
                    <h4>Don't have an account? <span onClick={() => {navigate('/accounts/emailsignup/');}}>Sign up</span></h4>
                </SignUpBox>

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
        </LoginPageContainer>
    );
}

const LoginPageContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: rgb(250, 250, 250);
`;

const BoxContainer = styled.div`
    margin: auto;
`;

const LoginForm = styled.div`
    margin: auto;
    width: 348px;
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
`;

const SignUpBox = styled.div`
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
            font-weight: 600;
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
