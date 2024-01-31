<template>
    <div class="SejunView">
        <img src="../../../assets/공군.png" width="224" @click=firChangePopState()>
    </div>
    <div v-if="firPopState == true">
        <div class="pink-bg">
            <h4>다음 휴가: {{ firstChampion }}</h4>
            <button class="close" @click="firChangePopState()">ok</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SejunView',
    data() {
        return {
            firstChampion: 'YYYY.MM.DD',
            firPopState: false,
        };
    },
    methods: {
        firChangePopState() {
            this.firPopState = !this.firPopState;
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
    width: 25px;
    height: 25px;
    top: 7px;
    position: relative;
}

.pink-bg {
    width: 18%;
    height: 13%;
    background-color: rgb(255, 204, 204);
    padding: 50;
    border-radius: 8px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}</style>
