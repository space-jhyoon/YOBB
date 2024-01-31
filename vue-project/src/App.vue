<template>
  <nav>
    <a href="/YOBB" class="router-link-active router-link-exact-active-title" style="font-size: 2.0em;">YOBB</a>
  </nav>
  <hr>
  <div>
    <div v-for="userInfo in userInfos" :key="userInfo.id">
      <router-link :to="'/YOBB/'+userInfo.name[1]"><div>
        <h3 class="left-aligned">닉네임</h3>
        <h4 class="left-aligned">{{ userInfo.nickname }}</h4>
        <h3 class="left-aligned">대표 챔피언</h3>
        <img :src="require(`@/assets/${userInfo.firstChampion_name}.jpg`)" width="224"> <img :src="require(`@/assets/${userInfo.secondChampion_name}.jpg`)" width="224">
      </div></router-link>
    </div>
  </div>
<!--  <user-profile/>-->
  <member-info/>
<!--  <nav >-->
<!--&lt;!&ndash;    <router-link to="/kakaologin">kakaologin</router-link> |&ndash;&gt;-->
<!--    <router-link to="/YOBB/jihyun">지현</router-link> |-->
<!--    <router-link to="/YOBB/sunghyun">성현</router-link> |-->
<!--    <router-link to="/YOBB/jinhyun">진현</router-link> |-->
<!--    <router-link to="/YOBB/yubin">유빈</router-link> |-->
<!--    <router-link to="/YOBB/jihun">지헌</router-link> |-->
<!--    <router-link to="/YOBB/jeongin">정인</router-link> |-->
<!--    <router-link to="/YOBB/useong">우성</router-link> |-->
<!--    <router-link to="/YOBB/sejun">세준</router-link> |-->
<!--    <router-link to="/YOBB/yeongmok">영목</router-link> |-->
<!--    <router-link to="/YOBB/ingyeom">인겸</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
</template>

<script setup>

// import MemberInfo from "@/components/User/MemberInfo.vue";
import {useStore} from "vuex";
import {computed} from "vue";
// import UserProfile from "@/components/User/UserProfile.vue";
import MemberInfo from "@/components/User/MemberInfo.vue";

const store = useStore();

const userInfos = computed(() =>
{
  return store.state.userInfo;
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(239, 87, 119);
}

nav a.router-link-exact-active-title {
  color: rgb(255, 184, 184);
}

a {
  text-decoration: none;
}
</style>
