import React from 'react';
import Nav from '../Components/Nav'
import styled from 'styled-components'
import profile from '../profile1.png'
import profile2 from '../profile.png'
import profile3 from '../profile3.png'
import profile4 from '../profile4.png'

const Container = styled.div`
    height:100vh;
    max-height:100vh;
`
const AboutBox = styled.div`
    height:100%;
    display:flex;
    border:1px solid red;
    padding:10%;
`
const Img = styled.div`
    border:1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.div`
    width:100%;
    height:100%;
    border:1px solid blue;
`
const TextContent = styled.div`
    font-size:3em;
    font-weight: 500;
    letter-spacing: 0.2em;
`
const About = () => {
    return (
        <Container>
            <Nav />
            <AboutBox>
                <Img>
                    <img src={profile3}></img>
                </Img>
                <Text>
                    <TextContent>결과보단 과정이 아름다운 사람이 되고싶습니다.</TextContent>
                </Text>
            </AboutBox>
        </Container>
    );
};

export default About;