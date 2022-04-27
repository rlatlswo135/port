import ohJeju from './slideImg/ohJeju.png'
import umMarket from './slideImg/umMarket.png'
import coinTracker from './slideImg/coinTracker.png'
import Todo from './slideImg/Todo.png'
import piero from './slideImg/piero.png'
import kimflix from './slideImg/kimflix.png'
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
            platform:'Web',
            detail:{
                '프로젝트 동기':[
                    '상태관리 라이브러리를 직접 학습해보고자 만듬',
                ],
                '기능' : [
                    '상품 페이지 <-> 장바구니 간 정확한 실시간 재고처리'
                ],
                '이용 Skill':[
                    'React','Redux','Styled-Component'
                ]
            }
        },
        {
            title:'Coin-Track',
            content:`코인파프리카 API이용한 Coin 시세 웹 사이트`,
            img:coinTracker,
            month:'22-04',
            git:'https://github.com/rlatlswo135/coin-track',
            type:'Solo',
            velog:"https://velog.io/@cjkim/Coin-Tracker",
            url:"https://rlatlswo135.github.io/coin-track/",
            platform:'Web',
            detail:{
                '프로젝트 동기':[
                    '프론트엔드 개발자로써 API를 통해 불러온 데이터를 이용해 웹앱을 만들고 싶어서 진행',
                    'Coin-Paprika API에 대한 흥미'
                ],
                '기존 클로닝과 다른점' : [
                    '코인정보를 불러올 시 차트와 작은 미니리스트가 같이 나오게 구현',
                    '미니리스트 역시 React-Query를 이용해서 최대한 실시간 처럼 구현'
                ],
                '이용 Skill':[
                    'React','React-Query','Apex-Chart','Styled-Component'
                ]
            }
        },
        {
            title:'ToDo & Eat',
            content:'본인이 실제 쓰는 앱 기능 2개를 광고없이 쓰려고 만든 ToDo,ToEat을 합친 간단한 Ios App',
            img:Todo,
            month:'22-04',
            velog:"https://velog.io/@cjkim/%EB%82%98%EB%A7%8C%EC%9D%98-TodoApp",
            git:'https://github.com/rlatlswo135/react-native-begin/tree/master/CJTodo',
            type:'Solo',
            url:'https://expo.dev/@kimcj/CJTodo',
            platform:'Mobile',
            detail:{
                '프로젝트 동기':[
                    'React-Native를 잠시 경험해보고자 학습차 만든 클로닝 프로젝트'
                ],
                '기능':[
                    '데일리로 이용하는 계획 & 식단을 기록하는 IOS 앱'
                ]
                ,
                '기존 클로닝과 다른점' : [
                    '클로닝에 To-Eat기능은 없음. 직접 사용하고자 아침-점심-저녁을 나눠서 기록할 수 있게 커스텀함',
                    '광고가 없다는부분에서 본인이 만족하면서 쓰는중'
                ],
                '이용 Skill':[
                    'React-Native'
                ]
            }
        },
        {
            title:'Eating & Die',
            content:'나도 게임을 만들수있을까? 라는 생각으로 만든 순수 JavaScript 게임',
            img:piero,
            month:'22-04',
            git:"https://github.com/rlatlswo135/dino",
            type:'Solo',
            velog:"https://velog.io/@cjkim/%EC%9D%91%EB%A8%B9%EA%B3%A0%EC%A3%BD%EC%9C%BC%EB%A9%B4-%EA%B7%B8%EB%A7%8C%EC%9D%B4%EC%95%BC",
            url:'https://rlatlswo135.github.io/dino/',
            platform:'Web',
            detail:{
                '프로젝트 동기':[
                    '원래 개발자를 택한 이유가 나만의 게임을 만들고 싶었던 점',
                    '뱀파이어 서바이벌이 바닐라JS로 만들어졌다는거에 대한 도전심리',
                ],
                '기능' : [
                    '점수 증가함에 따른 투사체 속도증가',
                    '다양한 효과음',
                    '당시 유행하는 밈을 이용해서 만들어봄'
                ],
                '이용 Skill':[
                    'JavaScript'
                ]
            }
        },
        {
            title:'KIMFLIX',
            content:'netFilx 클로닝 프로젝트',
            img:kimflix,
            month:'22-04',
            git:"https://github.com/rlatlswo135/kimflix",
            type:'Solo',
            url:'https://rlatlswo135.github.io/kimflix/',
            platform:'Web',
            velog:"https://velog.io/@cjkim/NETFLIX-%ED%81%B4%EB%A1%9C%EB%8B%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
            detail:{
                '프로젝트 동기':['애니메이션 실력 향상 + 다양한 React 라이브러리를 배우고자 진행'],
                '기능':[
                    '현재 상영중 이거나 인기있는 Movie & Tv 컨텐츠를 간략하게 소개하는 WebApp'
                ],

                '기존 클로닝과 다른점' : [
                    'TMDB가 제공하는 API를 이용 youtube 동영상 삽입까지 구현',
                    '받아온 data내 video url이 없으면 비슷한 컨텐츠를 이미지 슬라이더로 나오게 구현',
                    '기타 디자인적 부분'
                ],
                '이용 Skill':[
                    'React','Framer-motion','React-Query','React-hook-forms','Styled-Component'
                ]
            }
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
            platform:'Web',
            detail:{
                '상세 기능':['노션 첨부'],
                'Link':['https://odd-bearberry-1f8.notion.site/Ohjeju-753c3d0103c44f4f8e1ba3e1706df7d7']
            }
        }
    ]
}