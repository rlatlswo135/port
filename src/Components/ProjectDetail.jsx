import React,{useState} from 'react';
import Nav from './Nav'
import styled,{keyframes} from 'styled-components'
import umMarket from '../slideImg/umMarket.png'
import {useSpring,animated} from 'react-spring'
import {useLocation,useParams} from 'react-router-dom'
import {data} from '../data'
import {BsGithub} from 'react-icons/bs'
import {SiNotion} from 'react-icons/si'


const clickAni = keyframes`
    from{
        transform: translateX(0.3em);
    }
    to{
        transform:translateX(-0.3em)
    }
`
const appearAni = keyframes`
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
`
const Content = styled.div`
    height:100vh;
    padding:6% 5%;
    display:flex;
    justify-content: center;
    animation: 0.5s linear 0s ${appearAni};
`
const Img = styled.img`
position: absolute;
    width:100%;
    height:100%;
    top:5%;
    left:0%;
    opacity: 0.8;
`
const Text = styled.div`
    flex:1;
    padding-left:7%;
    padding-top:2%;
    font-size:2em;
    h1{
        margin:0px;
        span{
            font-size:0.5em;
            opacity: 0.4;
            margin-left:2%;
        }
    }
    h3{
        opacity: 0.7;
    }
    h4{
        padding-top:10%;
        animation: 1s linear ${clickAni} infinite;
    }
    h2{
        opacity: 0.2;
        span{
            font-size:0.7em;
            padding-left:3%;
        }
    }
    div{
        padding-top: 20%;
        font-size:1.5em;
        display: flex;
        flex-direction: column;
        @media screen and (max-width:1680px){
            padding-top:5%;
    }
    }
`
const Link = styled.a`
    flex:1;
    position: relative;
`
const GoGit = styled.a`
    transition: all 0.5s;
    opacity: 0.8;
    margin-bottom:5%;
    span{
        padding-left:3%;
        font-size:1.1em;
        font-weight: 600;
    }
    &:hover{
        text-decoration: underline;
    }
`
const GoNotion = styled(GoGit)`
    span{
        &:nth-child(3){
            font-size:0.55em;
        }
    }
`
const UmMarket = (props) => {
    // props던 state던 없으면 null로나옴
    const {state} = useLocation()
    const params = useParams();
    const middle = Object.keys(data).map(item => data[item])
    const filterArray = middle.flat().filter(item => item.title === params.project)[0]
    return (
        <div>
            <Nav />
            <Content>
                <Link href={filterArray.url} target="blank">
                    <Img src={filterArray.img}></Img>
                </Link>
                <Text>
                    <h1>{filterArray.title}<span>{`(${filterArray.platform})`}</span></h1>
                    <h3>{filterArray.content}</h3>
                    <h2>{`${filterArray.type}-Project`}{filterArray.type === 'Team' ? <span>(Back-End)</span> : null}</h2>
                    <h4>{`<- Click`}</h4>
                    <div>
                        <GoGit href={filterArray.git} target="_blank">
                            <BsGithub/>
                            <span>Git Repo</span>
                        </GoGit>
                        {filterArray.notion 
                        ?
                        <GoNotion href={filterArray.notion} target="_blank">
                            <SiNotion/>
                            <span>Notion</span>
                            <span>(상세기능)</span>
                            </GoNotion>:null}
                    </div>
                </Text>
            </Content>
        </div>
    );
};

export default UmMarket;