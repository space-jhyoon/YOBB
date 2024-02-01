<template>
  <div>
    <h3 class="left-aligned">닉네임</h3>
    <h4 class="left-aligned">{{ userNickname }}
      <img :src="require(`@/assets/${image_opgg}`)" class="logo-aligned" @click="onClickRedirectLol">
    </h4>
    <h3 class="left-aligned">대표 챔피언</h3>
    <img :src="require(`@/assets/${userFirstChamp}.jpg`)" width="224">
    <img :src="require(`@/assets/${userSecondChamp}.jpg`)" width="224">
  </div>
<!--  <div>-->
<!--    {{userInfos[id]}}-->
<!--  </div>-->
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";
import {useRoute} from 'vue-router'

const store = useStore();
const route = useRoute();

const id = computed(() => {
  return route.params.id
})
console.log(id)
console.log("route.params", route.params);

const mainpageInfo = computed(() => {
  return store.state.commonInfo.mainpageInfo;
});
const image = ref(mainpageInfo.value.image);
const image_opgg = ref(image.value[4])
const opggUrl = ref(mainpageInfo.value.opggUrl);


const userInfos = computed(() => {
  return store.state.userInfo;
});
// console.log(id, userInfos.value[id.value])

// const userInfo = userInfos.value[id.value]
// const userNickname = userInfo.value.nickname
// const userFirstChamp = userInfo.value.firstChampion_name
// const userSecondChamp = userInfo.value.secondChampion_name


const userInfo = ref(userInfos.value["jihyun"]);
const userNickname = ref(userInfo.value.nickname)
const userFirstChamp = ref(userInfo.value.firstChampion_name)
const userSecondChamp = ref(userInfo.value.secondChampion_name)


function onClickRedirectLol() {
  window.open(opggUrl.value + userNickname.value, "_blank");
}
console.log("id : ", id)
console.log("data : ", userNickname, userFirstChamp, userSecondChamp)
console.log("opgg : ", image_opgg, opggUrl)

function activeUserInfo(user) {
  console.log("userInfo", userInfo)
  userInfo.value = userInfos.value[user];
  userNickname.value = userInfo.value.nickname
  userFirstChamp.value = userInfo.value.firstChampion_name
  userSecondChamp.value = userInfo.value.secondChampion_name
}

// const testt = ref(
//     {
//       aa : "aa",
//       bb : "bb"
//     }
// )

// function test() {
//   console.log("hi")
//   test2()
//   console.log(testt)
//   console.log(testt.value.aa)
// }
//
// function test2() {
//   console.log("hi")
// }
watch(() => id.value, (newId) => {
  console.log("watch new id", newId)
  activeUserInfo(newId);
})
</script>

<style>

.left-aligned {
  /*text-align: left;*/
  /*padding-left: 600px;*/
  text-align: center;
}

.logo-aligned {
  width:25px; height:25px; top:7px; position:relative;
}
</style>