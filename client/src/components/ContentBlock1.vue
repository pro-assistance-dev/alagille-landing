<template>
  <div class="content">
    <PFlex>
      <PString
        string="Цели&nbsp"
        font-size="42px"
        color="#E42623"
        background="initial"
        justify-content="left"
        margin="40px 0 0 0px"
        font-weight="regular"
      />
      <PString
        string="программы"
        font-size="42px"
        color="#0099B8"
        background="initial"
        justify-content="left"
        margin="40px 0 0 0px"
        font-weight="regular"
      />
    </PFlex>

    <PString
      string="АНО Социум предлагает реализоать Программу направленную на содействие внедрению и развитию медико-социальной патронажной службы
       как механизма повышения качества помощи пациентам с Синдромом Алажилля (СА) и их семей"
      font-size="20px"
      color="#0099B8"
      background="initial"
      justify-content="left"
      margin="10px 0 0 0px"
      font-weight="regular"
    />
    <GridContainer max-width="1280px" grid-template-columns="repeat(auto-fit, minmax(370px, 1fr))" grid-gap="20px">
      <Card
        url="/assets/mainimg/1/1.png"
        text="Обеспечение качества оказания социальной, психологической, и&nbspюридической помощи пациентам&nbspс&nbspСА"
      />
      <Card url="/assets/mainimg/1/2.png" text="Повышение качества жизни пациентов с СА и их семей" />
      <Card
        url="/assets/mainimg/1/3.png"
        text="Удержание приверженности пациентов к рекомендациям врача и назначенной терапии (компетентности)"
      />
    </GridContainer>
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
