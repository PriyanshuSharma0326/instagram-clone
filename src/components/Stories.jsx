import React from 'react';
import styled from 'styled-components';
import Story from './Story';

export default function Stories() {
    return (
        <StoriesContainer>
            <Story 
                imgURL='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/06/az-1560143950.jpg'
                username='zampstagram'
            />
            <Story 
                imgURL='https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg'
                username='narendramodi'
            />
            <Story 
                imgURL='https://pbs.twimg.com/profile_images/1570349833277546497/I-SK-za7_400x400.jpg'
                username='amitshahofficial'
            />
            <Story 
                imgURL='https://c.ndtvimg.com/2021-10/gjo8hnng_ms-dhoni-ipl_625x300_07_October_21.jpg'
                username='mahi7781'
            />
            <Story 
                imgURL='https://cdn.vox-cdn.com/thumbor/Pf24FCHGfYLeq6xK2diles_hlZg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24160775/1438223722.jpg'
                username='mr.choupo'
            />
            <Story 
                imgURL='https://static.dw.com/image/57884254_804.jpg'
                username='jok32'
            />
            <Story 
                imgURL='https://i.ytimg.com/vi/Z1K4BUtHsO4/maxresdefault.jpg'
                username='puneetsuper_starrr'
            />
            <Story 
                imgURL='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202001/bhuvan_bam_660_200120112916.jpg'
                username='bhuvan.bam22'
            />
        </StoriesContainer>
    );
}

const StoriesContainer = styled.div`
    padding: 32px 0 15px 0;
    width: 100%;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 767px) {
        padding: 45px 0 17px 0;
    }
`;
