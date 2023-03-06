import React from 'react';
import styled from 'styled-components';
import Post from '../components/Post';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../lib/config/firebase';

export default function Posts() {
    const [posts] = useCollection(
        db.collection('userPosts')
        .orderBy('timestamp', 'desc')
    );

    return (
        <PostsContainer>
            {posts?.docs.map((post) => {
                const { author, timestamp, postLocation, postURL, descriptionText, authorPhotoURL, postType } = post.data();

                var stamp = timestamp.toDate().getTime();
                var todate = new Date(stamp).getDate();
                var tomonth = new Date(stamp).getMonth() + 1;
                var toyear = new Date(stamp).getFullYear();
                var original_date = tomonth+'/'+todate+'/'+toyear;
            
                return (
                    <Post 
                        key={post.id}
                        username={author} 
                        location={postLocation}
                        description={descriptionText}
                        day={original_date} 
                        mediaURL={postURL} 
                        userImageURL={authorPhotoURL}
                        mediaType={postType}
                    />
                );
            })}
        </PostsContainer>
    );
}

const PostsContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    @media (min-width: 488px) {
        /* margin: 0 10px; */
    }
`;
