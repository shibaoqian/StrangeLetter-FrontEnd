
<script setup lang="ts">
import {reactive, ref} from "vue";
import { useRouter } from 'vue-router'

const read = ref('阅')
const write = ref('撰')
const model = reactive({model: 'symbiosis'})
let readDom = ref();
let writeDom = ref();
const router = useRouter()
function setModel(type: string) {
  model.model = type
  const moveLength = type === 'read' ? window.innerWidth / 2 - readDom.value.offsetLeft - 100 : -(window.innerWidth / 2 - readDom.value.offsetLeft - 100)
  console.log(readDom)
  document.getElementsByTagName('body')[0].style.setProperty('--width-primary', moveLength + 'px');
  setTimeout(() => {
    if (type === 'read') {
      writeDom.value.display = 'none'
    }else{
      readDom.value.display = 'none'
    }
  },500)
  setTimeout(() => {
    router.push(`/${type}`)
  },1700)
}

</script>

<template>
  <div class="index-body">
      <div ref="readDom" :class="model.model === 'symbiosis' ? 'fire-paint' : model.model === 'write' ? 'fire-paint fire-paint-hidden' : 'fire-paint fire-paint-active1'" @click="setModel('read')">{{read}}</div>
      <div ref="writeDom" :class="model.model === 'symbiosis' ? 'fire-paint' : model.model === 'read' ? 'fire-paint fire-paint-hidden' : 'fire-paint fire-paint-active2'" @click="setModel('write')">{{write}}</div>
  </div>
</template>

<style lang="scss" scoped>
$windowWidth: var(--width-primary);
.fire-paint{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-align: center;
  line-height: 200px;
  background: #ccc url('../assets/images/firePaint.png') no-repeat 10px 10px;
  background-size: contain;
  cursor: pointer;
  color: white;
  font-size: 40px;
  user-select: none;
  transition: all 0.5s ease-out;
  box-shadow: 2px 2px 10px 10px #ccc;
}
.fire-paint-hidden{
  opacity: 0;
}

.fire-paint-active1{
  animation: active1 1.2s ease-out 0.5s  forwards;
}

.fire-paint-active2{
  animation: active2 1.2s ease-out 0.5s  forwards;
}

.index-body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.child-body {
  justify-content: center;
}

@keyframes active1{
  0%{
    transform: translateX(0);
  }
  50%{
    transform: translateX($windowWidth) scale(1.0);
    opacity: 1;
    color: white;
  }
  100%{
    transform: translateX($windowWidth) scale(3);
    opacity: 0;
    color: red;
  }
}

@keyframes active2{
  0%{
    transform: translateX(0);
  }
  50%{
    transform: translateX($windowWidth) scale(1.0);
    opacity: 1;
    color: white;
  }
  100%{
    transform: translateX($windowWidth) scale(3);
    opacity: 0;
    color: red;
  }
}
</style>