<template>
  <div class="header">
    <div class="header-img-bg" :style="{ backgroundImage: 'url(' + url + ')' }">
      <IconLogo size="110px" margin="50px 10px 8px 100px" />
      <PString
        string="СОЦИУМ"
        font-size="40px"
        color="#ffffff"
        background="initial"
        justify-content="left"
        margin="0 0 0 60px"
        font-weight="bold"
      />
      <PString
        string="Программа поддержки&nbspпациентов с&nbspсиндромом&nbspАлажилля и их семей"
        font-size="42px"
        color="#ffffff"
        background="initial"
        justify-content="left"
        margin="50px 0 0 60px"
        font-weight="regular"
        width="500px"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const url = new URL('@/assets/mainimg/header-bg-718blur.png', import.meta.url).href;
</script>
<style scoped>
.header-img-bg {
  max-width: 1280px;
  height: 718px;
  margin: 0 auto;
}
</style>
