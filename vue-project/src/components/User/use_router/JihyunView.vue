<template>
  <div class="JihyunView">
    <h3 class="left-aligned">닉네임</h3>
    <h4 class="left-aligned">{{ nickname }}<img src="../../../assets/opggLogo.png" class="logo-aligned" @click="onClickRedirectLol()">
      <img class="logo-aligned" src="../../../assets/롤체로고.jpg" @click="onClickRedirectLolchess()"></h4>
    <h3 class="left-aligned">포지션</h3>
    <h4 class="left-aligned">{{ position }}</h4>
    <h3 class="left-aligned">대표 챔피언 승률</h3>
    <img src="../../../assets/룰루.jpg" width="224" @click=firChangePopState()> <img src="../../../assets/아리.jpg" width="224" @click=secChangePopState()>
  </div>
  <div v-if="firPopState == true">
      <div class="pink-bg">
          <h4>{{ name[0] }} 승률: {{ firstChampion }}</h4>
          <button class="close" @click="firChangePopState()">ok</button>
      </div>
  </div>
  <div v-if="secPopState == true">
      <div class="pink-bg">
          <h4>{{ name[1] }} 승률: {{ secondChampion }}</h4>
          <button class="close" @click="secChangePopState()">ok</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'JihyunView',
  data() {
    return {
      nickname: '아리는 냐옹 ',
      position: 'sup',
      name: ["룰루", "아리"],
      firstChampion: '45%',
      secondChampion: '40%',
      firPopState: false,
      secPopState: false
    };
  },
  methods: {
    onClickRedirectLol: function () {
      window.open("https://www.op.gg/summoners/kr/%EC%95%84%EB%A6%AC%EB%8A%94%20%EB%83%90%EC%98%B9", "_blank");
    },
    onClickRedirectLolchess: function () {
      window.open("https://lolchess.gg/profile/kr/%EC%95%84%EB%A6%AC%EB%8A%94%EB%83%90%EC%98%B9/set9.5", "_blank");
    },
    firChangePopState() {
      this.firPopState = !this.firPopState;
    },
    secChangePopState() {
      this.secPopState = !this.secPopState;
    }
  }
};
</script>

<style>

.left-aligned {
  text-align: left;
  padding-left: 600px; 
} 

.logo-aligned {
  width:25px; height:25px; top:7px; position:relative;
}

.pink-bg {
  width: 12%;
  height: 13%;
  background-color: rgb(255, 204, 204);
  padding: 50;
  border-radius: 8px;
  position: fixed;
  left: 50%;
  top: 50%; 
  transform: translate(-50%, -50%);
}

</style>
