import React from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Nav from '../Components/Nav'
import pdf from '../introduction.pdf'
const Container = styled(motion.div)`
    display:flex;
    flex-direction: column;
    height:100vh;
    max-width:100vw;
`
const BoxOne = styled(motion.div)`
    border-bottom:1px solid rgba(155,155,155,0.3);
    padding:0% 7%;
    padding-top:7%;
    @media screen and (max-width:1680px){
        font-size:0.9em;
        padding-top:5%;
    }
    h1{
        a{
            font-size:0.7em;
            padding-left:1%;
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`
const BoxTwo = styled(motion.div)`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    padding: 0% 5%;
    padding-top: 3%;
    h2{
        font-size:3em;
        letter-spacing: 0.1em;
        color:rgba(255,255,255,0.9);
        @media screen and (max-width:1680px){
        font-size:2.5em;
    }
    }
    p{
        font-size:1.5em;
        font-weight: 600;
        color:rgba(255,255,255,0.8);
        letter-spacing: 0.1em;
    @media screen and (max-width:1680px){
        font-size:1.23em;
        letter-spacing: 0em;
    }
    }
    @media screen and (max-width:1680px){
        padding-top:2%;
    }
`
const BoxTwoItem = styled(motion.div)`
    padding:0.5% 5% 8% 5%;
`
const containerVars = {
    start:{opacity:0,y:100},
    end:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            delayChildren:0.3,
            staggerChildren:0.2
        }
    },
}
const boxVars={
    start:{opacity:0},
    end:{
        opacity:1,
        transition:{
            type:"spring",
            staggerChildren:0.35
        }
    },
}
const boxTwoItemVars={
    start:{opacity:0},
    end:{opacity:1},
    transition: {
        type:'spring'
    }
}
const AboutMe = () => {
    return (
        <>
        <Nav/>
        <Container variants={containerVars} initial={'start'} animate={'end'}>
            <BoxOne variants={boxVars}>
                <h1>안녕하세요. 프론트엔드 개발자를 목표로하는 김신재입니다.</h1>
                <h1>항상 더 나은 '사람'이 되기위해서 늘 겸손하게. 배우려는 자세로 임합니다.
                    {/* <a href={pdf} download="김신재_이력서">(이력서 다운로드)</a> */}
                    </h1>
            </BoxOne>
            <BoxTwo variants={boxVars}>
                <BoxTwoItem variants={boxTwoItemVars}>
                    <h2>배움</h2>
                    <p>새로운것을 배움에서 오는 놀라움을 좋아합니다.</p>
                    <p>알고리즘 공부를 주마다 합니다. 생각하는 힘이 개발자로써 성장이라고 생각합니다.</p>
                    <p><a href="https://programmers.co.kr/learn/courses/30/lessons/92334" target="_blank">프로그래머스 Lv1</a>을 자력으로 다 풀고 Lv2를 도전중입니다.</p>
                </BoxTwoItem>
                <BoxTwoItem variants={boxTwoItemVars}>
                    <h2>개발</h2>
                    <p>흥미있는 아이디어가 생각나면 만들어봅니다.</p>
                    <p>결과물이 나왔어도 더 좋은 아이디어가 있으면 추가하고 보수합니다.</p>
                    <p>클로닝 프로젝트를 해도 추가적인 기능, 다른 디자인 등 저만의 것을 만들려고 노력합니다.</p>
                </BoxTwoItem>
                <BoxTwoItem variants={boxTwoItemVars}>
                    <h2>부트캠프</h2>
                    <p>6개월의 부트캠프를 경험했습니다.</p>
                    <p>팀프로젝트를 진행하며 팀원과의 커뮤니케이션이 중요함을 느꼈습니다.</p>
                </BoxTwoItem>
                <BoxTwoItem variants={boxTwoItemVars}>
                    <h2>성실</h2>
                    <p>유리공장에서 6년을 근무했습니다.</p>
                    <p>뜨거운 환경에서 많은 땀을 참으며 단단한 사람이 되었다고 믿습니다.</p>
                    <p>앞으로도 쭉 뜨겁게 회사와 함께 성장하고 싶습니다.</p>
                </BoxTwoItem>
            </BoxTwo>
        </Container>
        </>
    );
};

export default AboutMe;