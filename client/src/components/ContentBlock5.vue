<template>
  <div class="content">
    <PFlex>
      <PString
        string="Описание&nbsp"
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

    <div :style="{ display: 'flex', justifyContent: 'center', margin: '20px 0' }">
      <GridContainer max-width="1280px" grid-template-columns="repeat(auto-fit, minmax(375px, 1fr))" grid-gap="20px">
        <Stamp width="375px" height="210px" url="/assets/mainimg/5/1.png" borderTopRightRadius="100px" text="" />
        <Stamp width="375px" height="210px" text="Сопровождения семьи с ребенком консьерж представителем" borderTopRightRadius="100px">
          <IconStamp21 />
        </Stamp>
        <Stamp
          width="375px"
          height="210px"
          text="Содействие формированию системы оказания специализированной медицинской помощи пациентам с СА и формированию системы  оценки качества"
          borderTopRightRadius="100px"
        >
          <IconStamp22 />
        </Stamp>
        <Stamp
          width="375px"
          height="210px"
          text="Организация проведения консультации и выполнения дополнительных анализов не входящих в ОМС"
          borderTopRightRadius="100px"
        >
          <IconStamp23 />
        </Stamp>
        <Stamp
          width="375px"
          height="210px"
          text="Психологическое и юридическое консультирование пациентов и их семей на территории Российской Федерации"
          borderTopRightRadius="100px"
        >
          <IconStamp24 />
        </Stamp>
        <Stamp
          width="375px"
          height="210px"
          text="Содействие формированию системы оказания специализированной медицинской помощи пациентам с СА и формированию системы  оценки качества"
          borderTopRightRadius="100px"
        >
          <IconStamp25 />
        </Stamp>
      </GridContainer>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped></style>
