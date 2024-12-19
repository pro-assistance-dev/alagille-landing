<template>
  <div class="scroll">
    <PSticky :z-index="2" :shadow="true">
      <PFlex background="#0099B8" max-width="1280px" margin="0 auto" height="40px" justify-content="right">
        <MainButton text="Зарегистрироваться в программе" @click="showAddModal = true" />
      </PFlex>
    </PSticky>
    <Header />
    <ContentBlock1 />
    <ContentBlock2 />
    <ContentBlock3 />
    <ContentBlock4 />
    <div class="main-image-container">
      <img :src="main7" />
    </div>
    <ContentBlock5 />
    <ContentBlock6 />

    <div class="main-image-container">
      <img :src="main10" />
    </div>
    <div class="main-image-container">
      <img :src="main11" />
    </div>
    <div class="main-image-container">
      <img :src="main12" />
    </div>
    <div class="main-image-container">
      <img :src="main13" />
    </div>
    <div class="main-image-container">
      <img :src="main14" />
    </div>
    <div class="main-image-container">
      <img :src="main15" />
    </div>
    <div class="main-image-container">
      <img :src="main16" />
    </div>
  </div>
  <PModal v-if="showAddModal" :show="showAddModal" :closable="true" @close="toggleAddModal" width="1000px" top="5vh">
    <FormRegistration @create="toggleAddModal" />
  </PModal>
</template>
<script lang="ts" setup>
import main4 from '@/assets/mainimg/main4.png';
import main5 from '@/assets/mainimg/main5.png';
import main6 from '@/assets/mainimg/main6.png';
import main7 from '@/assets/mainimg/main7.png';
import main8 from '@/assets/mainimg/main8.png';
import main9 from '@/assets/mainimg/main9.png';
import main10 from '@/assets/mainimg/main10.png';
import main11 from '@/assets/mainimg/main11.png';
import main12 from '@/assets/mainimg/main12.png';
import main13 from '@/assets/mainimg/main13.png';
import main14 from '@/assets/mainimg/main14.png';
import main15 from '@/assets/mainimg/main15.png';
import main16 from '@/assets/mainimg/main16.png';

const showAddModal: Ref<boolean> = ref(false);
const toggleAddModal = (): void => {
  showAddModal.value = !showAddModal.value;
};
</script>
<style scoped>
.scroll {
  position: relative;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  /* background: #e9f1f4; */
  box-sizing: border-box;
  max-width: 1300px;
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 0 10px;
}
.scroll {
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.main-image-container {
  max-width: 1280px;
  border-radius: 20px;
  margin: 20px auto;
  line-height: 0;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-button {
  background: #ffffff;
  color: #0099b8;
  width: auto;
  height: auto;
  padding: 6px 20px 5px 20px;
  border: 1px solid #ffffff;
  border-radius: 100px;
  margin: 0 20px;
}

.main-button:hover {
  background: #e9f1f4;
  border-color: #e9f1f4;
}
.main-button:active {
  background: #0099b8;
  color: #ffffff;
}
</style>
