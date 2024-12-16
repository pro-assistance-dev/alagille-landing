<template>
  <div class="content">
    <PString
      string="При усугублении синдрома Алажилля могут возникнуть серьезные последствия:"
      font-size="28px"
      color="#0099B8"
      background="initial"
      justify-content="left"
      margin="50px 0 0 0px"
      font-weight="regular"
    />
    <GridContainer max-width="100%" grid-template-columns="repeat(auto-fit, minmax(610px, 1fr))">
      <Card2
        title="Цирроз печени:"
        text="Прогрессирующее повреждение печени может привести к циррозу, что потребует трансплантации органа"
      />
      <Card2
        title="Сердечная недостаточность:"
        text="Пороки сердца могут ухудшаться со временем, вызывая сердечную недостаточность и необходимость сложных хирургических вмешательств"
      />
    </GridContainer>
    <GridContainer max-width="100%" grid-template-columns="repeat(auto-fit, minmax(610px, 1fr))">
      <Card2
        title="Физическая инвалидизация:"
        text="Задержка роста и физические ограничения могут стать более выраженными, затрудняя выполнение повседневных задач."
      />
      <Card2
        title="Психологические проблемы:"
        text="Из-за внешних изменений и проблем со здоровьем могут усиливаться депрессия и социальная изоляция"
      />
    </GridContainer>
    <GridContainer max-width="100%" grid-template-columns="repeat(auto-fit, minmax(610px, 1fr))">
      <Card2
        title="Летальный исход:"
        text="В тяжелых случаях осложнения, такие как печеночная или сердечная недостаточность, могут привести к смерти пациента"
      />
      <div />
    </GridContainer>

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
