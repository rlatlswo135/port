import ohJeju from './slideImg/ohJeju.png'
import umMarket from './slideImg/umMarket.png'
import coinTracker from './slideImg/coinTracker.png'
import Todo from './slideImg/Todo.png'
import piero from './slideImg/piero.png'

export const data = {
    // 이미지 사이즈 865 653
    'SOLO':[
        {
            title:'Um-Market',
            content:`Redux이용, 상태관리를 매끄럽게 해보기위해 만든 간단한 웹 쇼핑몰`,
            img:umMarket,
            month:'22-02',
            git:'https://github.com/rlatlswo135/UmMarket',
            type:'Solo',
            url:"https://rlatlswo135.github.io/",
            notion:"https://www.notion.so/Um-Market-b08afe067db444afb9785ada5c355eca",
            platform:'Web'
        },
        {
            title:'Coin-Track',
            content:`코인파프리카 API이용한 Coin 시세 웹 사이트`,
            img:coinTracker,
            month:'22-04',
            git:'https://github.com/rlatlswo135/coin-track',
            type:'Solo',
            url:"https://rlatlswo135.github.io/coin-track/",
            notion:"https://www.notion.so/Coin-Trackker-e48cdd63515448b1bf831f7f3554a5c3",
            platform:'Web'
        },
        {
            title:'ToDo & Eat',
            content:'본인이 실제 쓰는 앱 기능 2개를 광고없이 쓰려고 만든 ToDo,ToEat을 합친 간단한 Ios App',
            img:Todo,
            month:'22-04',
            git:'https://github.com/rlatlswo135/react-native-begin/tree/master/CJTodo',
            type:'Solo',
            url:'https://expo.dev/@kimcj/CJTodo',
            notion:"https://www.notion.so/ToDo-Eat-d90e6744bb64474faa731048a1c2ed1d",
            platform:'Mobile'
        },
        {
            title:'Eating & Die',
            content:'나도 게임을 만들수있을까? 라는 생각으로 만든 순수 JavaScript 게임',
            img:piero,
            month:'22-04',
            git:"https://github.com/rlatlswo135/dino",
            type:'Solo',
            url:'https://rlatlswo135.github.io/dino/',
            notion:"https://www.notion.so/Eating-and-Die-4376e5aa00d447c8b45467d8ce5f2e2b",
            platform:'Web'
        }
    ],
    'TEAM':[
        {
            title:'Oh!-Jeju!',
            content:`socketIO 이용, 채팅기능을 넣은 제주도 여행플래너`,
            img:ohJeju,
            month:'21-10',
            git:'https://github.com/codestates/Ohjeju',
            type:'Team',
            url:"https://oh-jeju.link/",
            notion:'https://www.notion.so/Ohjeju-ec1b7746c5eb4a14a219a184fd2427be',
            platform:'Web'
        }
    ]
}