import React,{useState} from 'react';
import Nav from '../Components/Nav'
import styled,{keyframes} from 'styled-components'
import Project from '../Components/Project'
import {data} from '../data'

const appearAni = keyframes`
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
`
const Container = styled.div`
    height:100vh;
    max-height: 100vh;
`
const PortBox = styled.div`
    height:100%;
    padding:3% 5%;
    display:flex;
    flex-direction: column;
    animation: 0.5s linear 0s ${appearAni};
`
const PortTop = styled.div`
    display:flex;
    justify-content: center;
    text-align: center;
    padding-top:2%;
`
const Platform = styled.select`
    color:white;
    background: gray;
    width:8%;
    font-size:1em;
    height:40%;
    padding:0.3%;
    border:1px solid red;
    margin-top:1.5%;
    margin-left:1.5%;
    font-weight: 600;
    border:none;
    @media screen and (max-width:1680px){
        height:100%;
        width:10%;
        margin-left:90%;
    }
`
const TopTitle = styled.div`
    font-size:6em;
    font-weight: 900;
    letter-spacing:0.3em;
    @media screen and (max-width:1680px){
        display:none;
    } 
`
const PortBottom = styled.div`
    flex:5;
    display:flex;
    flex-direction: column;
    padding-top:5%;
    @media screen and (max-width:1680px){
        padding-top:0%;
    } 
`


const Port = () => {
    const [platForm,setPlatForm] = useState('All')

    const sortedArray = Object.keys(data).sort((a,b)=>a-b)
    function changeFun(e){
        setPlatForm(e.target.value)
    }

    return (
        <Container>
            <Nav />
            <PortBox>
                <PortTop>
                    <TopTitle>PROJECTS</TopTitle>
                    <Platform onChange={(e)=>changeFun(e)}>
                        <option value="All" selected>PlatForm</option>
                        <option value="Web">Web</option>
                        <option value="Mobile">Mobile</option>
                    </Platform>
                </PortTop>
                <PortBottom>
                    {sortedArray.map(key => {
                        return(
                            <Project data={{
                                year:key,
                                platform:platForm,
                                projects:data[key]
                        }} />
                        )
                    })}
                </PortBottom>
            </PortBox>
        </Container>
    );
};

export default Port;