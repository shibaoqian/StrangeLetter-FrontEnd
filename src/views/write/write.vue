
<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";

const data = reactive(
    {
      status: false
    }
)
onMounted(() => {
  setTimeout(() => {
    data.status = true
  },0)
})

console.log(data.status)
</script>

<template>
  <div class="write-body">
    <div class="title">
      <div>撰</div>
    </div>
    <div class="canvas-cu" :style="data.status ? 'opacity: 1' : 'opacity:0'">

    </div>
  </div>
</template>

<style lang="scss" scoped>
.write-body {
  width: 100%;
  height: 100%;
  .title{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    div{
      font-size: 40px;
      color: red;
      transform: translateY(2px) scale(3);
    }
  }
  .canvas-cu{
    width: 100%;
    height: 100%;
    background: url('../../assets/images/back.jpg');
    opacity: 0;
    transition: opacity .5s ease-in-out;
  }
}
</style>