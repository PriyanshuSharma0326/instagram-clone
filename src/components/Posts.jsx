import React from 'react';
import styled from 'styled-components';
import Post from '../components/Post';

export default function Posts() {
    return (
        <PostsContainer>
            <Post 
                username='virat.kohli' 
                location='Lords' 
                day='3' 
                imgURL='https://images.hindustantimes.com/img/2022/09/13/1600x900/APTOPIX-Emirates-Asia-Cup-Cricket-1_1663066971405_1663066971405_1663066999978_1663066999978.jpg'
                description='Scored my 71st century after a long time. Feels great!'
            />
            <Post 
                username='narendramodi' 
                location='Ramleela Maidan' 
                day='5' 
                imgURL='https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/6/2022_6$largeimg_381175407.jpg'
                description='Mitron! Aaj Yog Diwas hai.'
            />
            <Post 
                username='chrisgayle333' 
                location='Jamaica' 
                day='4' 
                imgURL='https://upload.wikimedia.org/wikipedia/commons/d/dc/Chris_Gayle.png'
            />
            <Post 
                username='mahi7781' 
                location='Ranchi' 
                day='2' 
                imgURL='https://images.hindustantimes.com/img/2023/01/12/1600x900/Virat_Kohli_MS_Dhoni_1636427886192_1673539397747_1673539397747.jpg'
                description='Its always great to meet this boy.'
            />
        </PostsContainer>
    );
}

const PostsContainer = styled.div`
    width: 100%;
    height: fit-content;
`;
