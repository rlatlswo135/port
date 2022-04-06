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
    height:92%;
`
const Img = styled.div`
    background-image: url(${profile3});
`
const About = () => {
    return (
        <Container>
            <Nav />
            <AboutBox>
                About
            </AboutBox>
        </Container>
    );
};

export default About;