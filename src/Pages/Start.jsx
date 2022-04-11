import React from 'react';
import {useEffect,useState,useRef} from 'react'
import styled from 'styled-components'
import anime from 'animejs';
import {Link} from 'react-router-dom'

const Container = styled.div`
      display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100vh;
`
const ML5 = styled.h1`
    position: relative;
    font-weight: 300;
    font-size: 9em;
    color: #F7F5F2;
    &:hover{
      cursor: pointer;
    }
`
const Line = styled.span`
      position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 3px;
    width: 100%;
    background-color: #F7F5F2;
    transform-origin: 0.5 0;
    @media screen and (max-width:1520px){
      display:none;
    }
`
const TextWrap = styled.span`
      position: relative;
    display: inline-block;
    padding-top: 0.4em;
    padding-right: 0.05em;
    padding-bottom: 0.45em;
    line-height: 1em;
    @media screen and (max-width:1520px){
      text-align: center;
    }
`
const AmperSand=styled.span`
      font-weight: 400;
    width: 1em;
    margin-right: 1.7em;
    margin-left: 0.3em;
    display: inline-block;
    opacity: 0;
    color:#F7F5F2;
`
const LetterLeft = styled.span`
  
`
const LetterRight = styled.span`
  
`
const Start = () => {
    const animation = useRef(null)
    useEffect(()=>{
      animation.current=anime.timeline({loop:false})
      animation.current  .add({
        targets: '.ml5 .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
      }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
      }).add({
        targets: '.ml5 .ampersand',
        opacity: [0,1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.ml5 .letters-left',
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
      }).add({
        targets: '.ml5 .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.ml5',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });    
    },[])
    return (
        <Container >
        <Link to="/home">
            <ML5 className="ml5">
              <TextWrap className="text-wrapper">
                 <Line className="line line1"></Line>
                <LetterLeft className="letters letters-left">Developer</LetterLeft>
                 <AmperSand className="letters ampersand">Kim's</AmperSand>
                <LetterRight className="letters letters-right">Portfolio</LetterRight>
                 <Line className="line line2"></Line>
                </TextWrap>
            </ML5>
        </Link>
      </Container>
    );
};

export default Start;

{/* <h1 className="ml5">
<span className="text-wrapper">
   <span className="line line1"></span>
  <span className="letters letters-left">Developer</span>
   <span className="letters ampersand">Kim's</span>
  <span className="letters letters-right">Portfolio</span>
   <span className="line line2"></span>
  </span>
</h1> */}