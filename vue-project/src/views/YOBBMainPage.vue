<template>
  <div class="YOBBMain">
    <img :src="require(`@/assets/${image_red}`)" height="580"> <img :src="require(`@/assets/${image_blue}`)" height="580">
    <p>
      The location of the meeting is 25, Jeongok-ro 172beon-gil, Jeongok-eup, Yeoncheon-gun, Gyeonggi-do.
      <a :href="homeUrl"><img :src="require(`@/assets/${image_map}`)" width="25" class="logo-aligned"></a>
    </p>
    <p>kaljeongdae Discode <a :href="discordUrl"><img :src="require(`@/assets/${image_discode}`)" width="25" class="logo-aligned"></a></p>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();

const commonInfos = computed(() =>
{
  return store.state.commonInfo;
});
const mainpageInfo = commonInfos.value.mainpageInfo
const image = mainpageInfo.image
const image_red = image[0]
const image_blue = image[1]
const image_map = image[2]
const image_discode = image[3]
const homeUrl = mainpageInfo.homeUrl
const discordUrl = mainpageInfo.discordUrl

console.log(image_red, image_blue, homeUrl, discordUrl)

</script>

<style scoped>
.logo-aligned {
  width:25px; height:25px; top:7px; position:relative;
}
</style>
