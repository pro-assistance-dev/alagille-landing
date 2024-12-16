<template>
  <div class="content">
    <PString
      string="Холестаз существенно влияет на качество жизни пациента:"
      font-size="28px"
      color="#0099B8"
      background="initial"
      justify-content="left"
      margin="50px 0 0 0px"
      font-weight="regular"
    />

    <div :style="{ display: 'flex', justifyContent: 'center', margin: '20px 0' }">
      <GridContainer max-width="790px" grid-template-columns="repeat(auto-fit, minmax(250px, 1fr))" grid-gap="20px">
        <Stamp text="Когнитивные нарушения">
          <IconStamp1 />
        </Stamp>
        <Stamp text="Нарушения сна и утомляемость">
          <IconStamp2 />
        </Stamp>
        <Stamp text="Психическое здоровье депрессия">
          <IconStamp3 />
        </Stamp>
        <Stamp text="Проблемы с поведением">
          <IconStamp4 />
        </Stamp>
        <Stamp text="Снижение физической активности, общего состояния здоровья">
          <IconStamp6 />
        </Stamp>
        <Stamp text="Боль">
          <IconStamp5 />
        </Stamp>
      </GridContainer>
    </div>
    <PString
      string="Дети с хроническим холестатическим заболеванием печени в анамнезе могут испытывать повышенный риск долгосрочного когнитивного дефицита и снижения качества жизни."
      font-size="20px"
      color="#0099B8"
      background="initial"
      justify-content="left"
      margin="30px 0"
      font-weight="regular"
    />
  </div>
</template>
<script lang="ts" setup></script>
<style scoped></style>
