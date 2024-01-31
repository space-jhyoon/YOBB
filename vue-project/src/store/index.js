import { createStore } from "vuex";

export default createStore({
  state : {
    commonInfo : {
      mainpageInfo: {
        image: ["lightred.jpg", "skyblue.jpg", "map.jpg", "discodeLogo.jpg", "opggLogo.jpg"],
        homeUrl: "https://map.naver.com/p/entry/place/1959978957?lng=127.06909&lat=38.0278353&placePath=%2Fhome&c=15.00,0,0,2,dh",
        discordUrl: "https://discord.com/invite/86y573aC",
        opggUrl: "https://www.op.gg/summoners/kr/",
      }
    },
    userInfo: {
      jihyun : {
        id : 0,
        name : ["지현", "jihyun"],
        nickname: "아리는 냐옹",
        firstChampion_name : "룰루",
        secondChampion_name : "아리"
      },
      sunghyun : {
        id : 1,
        name : ["성현", "sunghyun"],
        nickname: "코성현",
        firstChampion_name : "람머스",
        secondChampion_name : "사미라",
      },
      jinhyun : {
        id : 2,
        name : ["진현", "jinhyun"],
        nickname: "누국께",
        firstChampion_name : "리븐",
        secondChampion_name : "피들스틱",
      },
      yubin : {
        id : 3,
        name : ["유빈", "yubin"],
        nickname: "야옹붕붕11호",
        firstChampion_name : "파이크",
        secondChampion_name : "마스터이",
      },
      jihun : {
        id : 4,
        name : ["지헌", "jihun"],
        nickname: "째째뿌째",
        firstChampion_name : "샤코",
        secondChampion_name : "세라핀",
      },
      jeongin : {
        id : 5,
        name : ["정인", "jeongin"],
        nickname: "눈누난나나무",
        firstChampion_name : "마오카이",
        secondChampion_name : "잭스",
      },
      useong : {
        id : 6,
        name : ["우성", "useong"],
        nickname: "야옹붕붕강형욱",
        firstChampion_name : "루시안",
        secondChampion_name : "카이사",
      },
      // sejun : {
      //   id : 7,
      //   name : ["세준", "sejun"],
      //   airforceUrl : "공군"
      // },
      yeongmok : {
        id : 8,
        name : ["영목", "yeongmok"],
        nickname: "zerotree",
        firstChampion_name : "워윅",
        secondChampion_name : "야스오",
      },
      ingyeom : {
        id : 9,
        name : ["인겸", "ingyeom"],
        nickname: "20학번너굴맨",
        firstChampion_name: "릴리아",
        secondChampion_name: "자르반",
      }
    }
  },
  // mutations: {
  //   updateImageUrl(state, newImageUrl) {
  //     state.commonInfo.mainpageInfo.ImageUrl = newImageUrl;
  //   }
  // },
});