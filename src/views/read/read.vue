
<script setup lang="ts">
import {ref} from "vue";


</script>

<template>
  <div class="read-body">
    <div class="title">
      <div>阅</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.read-body {
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
      transform:  translateY(2px) scale(3);
    }
  }
}
</style>