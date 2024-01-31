<template>
  <div>
    <h2>Member Info</h2>
    <div>
      경로 패턴 : /YOBB/:id<br />
      요청 경로 : {{route.path}}<br />
      id 값 : {{route.params.id}}<br />
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {onMounted} from "vue";

onMounted(() => {

})

const route = useRoute()
const id = computed(() => {
  return route.path
})

// const id = ref(route.params.id);
// const id = currentRoute.params.id;

console.log(id.value)

</script>

<style scoped>
</style>
