import React from 'react';
import Nav from '../Components/Nav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faBold} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import styled,{keyframes} from 'styled-components'


const Container = styled.div`
    height: 100vh;
    max-height: 100vh;
`
const tesAni = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

const ContactBox = styled.div`
    padding:10%;
    overflow: hidden;
    height:92%;
`
const ContactItem = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5%;
    animation: ${tesAni} 1s 0s linear;
    a{
        &:hover{
            text-decoration: underline;
        }
    }
`
const ContactText = styled.p`
    font-size:4em;
    font-weight: 600;
    letter-spacing: 0.15em;
`

// 각 아이템에 애니메이션 주기

const Contact = () => {
    const data = {
        github:{
            icons:faGithub,
            content:'작업물을 기록합니다',
            url:"https://github.com/rlatlswo135"
        },
        velog:{
            icons:faBold,
            content:'가벼운 일기장입니다',
            url:"https://velog.io/@cjkim"
        }
        ,
        mail:{
            icons:faEnvelope,
            content:'rlatlswo13@gmail.com'
        }
    }
    return (
        <Container>
            <Nav />
            <ContactBox>
                {
                    Object.keys(data).map((item,index) => {
                        return(
                            <ContactItem key={`contact-${index}`}>
                                <FontAwesomeIcon icon={data[item].icons} size="10x" />
                                {
                                    data[item].url
                                    ?
                                    <a href={data[item].url} target="_blank">
                                        <ContactText>{data[item].content}</ContactText>
                                    </a>
                                    :
                                    <ContactText>{data[item].content}</ContactText>
                                }
                            </ContactItem>
                        )
                    })
                }
            </ContactBox>
        </Container>
    );
};

export default Contact;