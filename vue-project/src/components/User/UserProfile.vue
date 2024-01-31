<template>
  <div>
    <h3 class="left-aligned">닉네임</h3>
  <h4 class="left-aligned">{{ userNickname }} <img :src="require(`@/assets/${image_opgg}`)" class="logo-aligned" @click="onClickRedirectLol"></h4>
    <h3 class="left-aligned">대표 챔피언</h3>
    <img :src="require(`@/assets/${userFirstChamp}.jpg`)" width="224"> <img :src="require(`@/assets/${userSecondChamp}.jpg`)" width="224">
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import {useRoute} from 'vue-router'

const store = useStore();
const route = useRoute();

const id = computed(() => {
  return route.params.id
})
console.log(id)

const mainpageInfo = computed(() =>
{
  return store.state.commonInfo.mainpageInfo;
});
const image = mainpageInfo.value.image
const image_opgg = image[4]
const opggUrl = mainpageInfo.value.opggUrl


const userInfos = computed(() =>
{
  return store.state.userInfo;
});
// console.log(id, userInfos.value[id.value])

const userInfo = userInfos.value[id.value]
const userNickname = userInfo.nickname
const userFirstChamp = userInfo.firstChampion_name
const userSecondChamp = userInfo.secondChampion_name


function onClickRedirectLol() {
  window.open(opggUrl + userNickname, "_blank");
}
console.log("id : ", id)
console.log("data : ", userNickname, userFirstChamp, userSecondChamp)
console.log("opgg : ", image_opgg, opggUrl)



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

</script>

<style>

.left-aligned {
  text-align: left;
  padding-left: 600px;
}

.logo-aligned {
  width:25px; height:25px; top:7px; position:relative;
}
</style>