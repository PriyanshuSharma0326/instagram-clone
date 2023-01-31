import React from 'react';
import styled from 'styled-components';
import Story from './Story';

export default function Stories() {
    return (
        <StoriesContainer>
            <Story 
                imgURL='https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/11/2021_11$largeimg_1236781513.JPG'
                username='chrisgayle333'
            />
            <Story 
                imgURL='https://navbharattimes.indiatimes.com/thumb/msid-71098959,imgsize-197886,width-540,height-405,resizemode-75/shubhman-gill-2-71098959.jpg'
                username='shubmangill'
            />
            <Story 
                imgURL='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202001/bhuvan_bam_660_200120112916.jpg'
                username='bhvan.bam22'
            />
            <Story 
                imgURL='https://www.mykhel.com/thumb/247x100x233/cricket/players/8/3788.jpg'
                username='virat.kohli'
            />
            <Story 
                imgURL='https://newyorkfolk.com/wp-content/uploads/2022/12/rs_1200x1200-221230150610-1200.cristiano-ronaldo-GettyImages-1245889188.jpg'
                username='cristiano'
            />
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
                imgURL='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png'
                username='fcbayern'
            />
            <Story 
                imgURL='https://img.fcbayern.com/image/upload/t_cms-2x1/f_auto/w_1600,c_fill/q_auto/v1674122997/cms/public/images/fcbayern-com/homepage/Saison-22-23/Galerien/Sommer-Transfer/07-yann-sommer-fc-bayern-190123-mel.jpg'
                username='ysommer1'
            />
            <Story 
                imgURL='https://i.ytimg.com/vi/Z1K4BUtHsO4/maxresdefault.jpg'
                username='puneetsuper_starrr'
            />
        </StoriesContainer>
    );
}

const StoriesContainer = styled.div`
    padding: 45px 0 32px 0;
    width: 100%;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;
