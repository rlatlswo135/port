import ohJeju from './slideImg/ohJeju.png'
import umMarket from './slideImg/umMarket.png'
import coinTracker from './slideImg/coinTracker.png'
import Todo from './slideImg/Todo.png'

export const data = {
    // 이미지 사이즈 865 653
    'SOLO':[
        {
            title:'Um-Market',
            content:`Redux이용, '재고관리'가 목적인 간단한 쇼핑몰`,
            img:umMarket,
            month:2,
            git:'https://github.com/rlatlswo135/UmMarket',
            type:'Solo',
            url:"https://rlatlswo135.github.io/",
            platform:'Web'
        },
        {
            title:'Coin-Track',
            content:`API이용 간단한 Coin 시세 Tracker`,
            img:coinTracker,
            month:4,
            git:'https://github.com/rlatlswo135/coin-track',
            type:'Solo',
            url:"https://rlatlswo135.github.io/coin-track/",
            platform:'Web'
        },
        {
            title:'ToDo & Eat',
            content:'ToDo와 ToEat을 합친 간단한 ios App',
            img:Todo,
            month:4,
            git:'https://github.com/rlatlswo135/react-native-begin/tree/master/CJTodo',
            type:'Solo',
            url:'https://expo.dev/@kimcj/CJTodo',
            platform:'Mobile'
        }
    ],
    'TEAM':[
        {
            title:'Oh!-Jeju!',
            content:`socketIO를 이용, 채팅기능을 넣은 제주도 여행 플래너`,
            img:ohJeju,
            month:10,
            git:'https://github.com/codestates/Ohjeju',
            type:'Team',
            url:"https://oh-jeju.link/",
            notion:'https://www.notion.so/Ohjeju-ec1b7746c5eb4a14a219a184fd2427be',
            platform:'Web'
        }
    ]
}