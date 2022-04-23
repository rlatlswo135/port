import React,{useState} from 'react';
import Nav from './Nav'
import styled,{keyframes} from 'styled-components'
import umMarket from '../slideImg/umMarket.png'
import {useSpring,animated} from 'react-spring'
import {useLocation,useParams} from 'react-router-dom'
import {data} from '../data'
import {BsGithub} from 'react-icons/bs'
import { motion } from 'framer-motion';
import {FaBlogger} from 'react-icons/fa'


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
const Content = styled(motion.div)`
    height:100vh;
    padding:6% 5%;
    justify-content: center;
    animation: 0.5s linear 0s ${appearAni};
    flex:1;
`
const Img = styled.img`
    width:100%;
    height:100%;
    top:5%;
    left:0%;
    opacity: 0.8;
`
const Text = styled(motion.div)`
    flex:2;
    padding-top:3.5%;

`
const Link = styled.a`
    flex:0.5;
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
const GoBlog = styled(GoGit)`
`

const Detail = styled.div`
    h4{
        font-size: 2.5em;
        animation: 1s linear ${clickAni} infinite;
    }
    @media screen and (max-width:1680px){
        h4{
            font-size:2em;
        }
    } 
`
const MiniTitle = styled.ul`
    font-size:2.5em;
    font-weight: 900;
    opacity: 0.8;
    margin-bottom: 6%;
    a{
        font-size:0.8em;
    }
    @media screen and (max-width:1680px){
        font-size:2em;
    } 
`
const DetailText = styled.li`
    padding-top: 2%;
    font-size:0.6em;
    list-style: none;
    letter-spacing: 0.05em;
`
const Container = styled.div`
    display:flex;
`
const Go = styled(motion.div)`
    flex:1;
    display:flex;
    flex-direction: column;
    font-size:2.5em;
    justify-content: center;
    padding-left:1%;
`
const UmMarket = (props) => {
    // props던 state던 없으면 null로나옴
    const params = useParams();
    const middle = Object.keys(data).map(item => data[item])
    const filterArray = middle.flat().filter(item => item.title === params.project)[0]
    return (
        <>
        <Nav />
        <Container>
            <Content initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.8}}>
                <Link href={filterArray.url} target="blank">
                    <Img src={filterArray.img}></Img>
                </Link>
            </Content>
            <Text initial={{y:-200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8}}>
               <Detail>
                        {
                            Object.keys(filterArray.detail).map((title) => {
                                if(title === 'Link'){
                                    return (
                                    <MiniTitle>{title}
                                    <div>
                                        <a href={filterArray.detail[title]} target="_blank">{filterArray.detail[title]}</a>
                                    </div>
                                    </MiniTitle>)
                                }
                                return(
                                    <MiniTitle>{title}
                                        {filterArray.detail[title].map(text => <DetailText>{`- ${text}`}</DetailText>)}
                                    </MiniTitle>
                                )
                            })
                        }
                    <h4>{`<- Click`}</h4>
                    </Detail>
                </Text>
                    <Go initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.8}}>
                        <GoGit href={filterArray.git} target="_blank">
                            <BsGithub/><span>Git Repo</span>
                        </GoGit>
                        {
                            filterArray.velog ? 
                            <GoBlog href={filterArray.velog} target="_blank">
                                <FaBlogger/><span>Velog</span>
                            </GoBlog>
                            :null
                        }
                    </Go>
        </Container>
        </>
    );
};

export default UmMarket;