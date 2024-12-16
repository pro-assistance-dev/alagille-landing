<template>
  <div class="content">
    <PFlex>
      <PString
        string="Синдром&nbsp"
        font-size="42px"
        color="#0099B8"
        background="initial"
        justify-content="left"
        margin="40px 0 0 0px"
        font-weight="regular"
      />
      <PString
        string="Алажилля"
        font-size="42px"
        color="#E42623"
        background="initial"
        justify-content="left"
        margin="40px 0 0 0px"
        font-weight="regular"
      />
    </PFlex>

    <PString
      string="Синдром Алажилля имеет орфанный статус и аутосомно-доминантный тип наследования."
      font-size="28px"
      color="#0099B8"
      background="initial"
      justify-content="left"
      margin="10px 0 0 0px"
      font-weight="regular"
    />

    <PString
      string="Мутации в генах JAG1 или NOTCH2 вызывают дефект морфогенеза желчных протоков, а так же аномалии скелета, глаз, сердечно-сосудистой системы и почек 40% пациентов наследуют мутацию от родителей, тогда как 60% мутаций возникает de novo"
      font-size="20px"
      color="#0099B8"
      background="initial"
      justify-content="left"
      margin="10px 0 0 0px"
      font-weight="regular"
    />
    <div class="card">
      <GridContainer max-width="1280px" grid-template-columns="repeat(auto-fit, minmax(320px, 1fr))" grid-gap="10px">
        <div class="card-img-bg">
          <img :src="url" />
        </div>
        <div>
          <PString
            string="У родителя, имеющего мутации в соответствующих генах, имеется 50% риск передать их по наследству своему потомству"
            font-size="20px"
            color="#0099B8"
            background="initial"
            justify-content="left"
            margin="0 20px"
            font-weight="regular"
          />
          <PString
            string="В 2021 году синдром Алажилля включен в перечень редких орфанных заболеваний Минздрава России"
            font-size="20px"
            color="#0099B8"
            background="initial"
            justify-content="left"
            margin="55px 20px 0 20px"
            font-weight="regular"
          />
          <PString
            string="Распространенность заболевания составляет один случай на 30 000 – 50 000 живорожденных"
            font-size="20px"
            color="#0099B8"
            background="initial"
            justify-content="left"
            margin="55px 20px 0 20px"
            font-weight="regular"
          />
        </div>
      </GridContainer>
    </div>
  </div>
</template>
<script lang="ts" setup>
const url = new URL('@/assets/mainimg/2/1.png', import.meta.url).href;
</script>
<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  border-radius: 60px;
  border: 1px solid #0099b8;
  box-sizing: border-box;
  padding: 30px;
}
.card-img-bg {
  position: relative;
  /* max-width: 500px;
  min-width: 320px; */
  width: 100%;
  /* max-height: 317px;
  min-height: 180px; */
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
