<template>
  <div class="content">
    <PFlex>
      <PString
        string="Элементы&nbsp"
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
      <GridContainer max-width="1280px" grid-template-columns="repeat(auto-fit, minmax(620px, 1fr))" grid-gap="20px">
        <Card3 title="Телефонная линия">
          <ul>
            <li>Выделенная телефонная линия под программу 8-800</li>
            <li>Бесплатные звонки для участников программы из всех регионов РФ</li>
            <li>Запись всех звонков</li>
          </ul>
        </Card3>
        <Card3 title="Программы к CRM">
          <ul>
            <li>Доступ участников программы к CRM через интернет-браузер и веб-сервер 24 часа</li>
            <li>Размещается в защищенной инфраструктуре сертифицированного дата-центра на территории РФ</li>
          </ul>
        </Card3>
        <Card3 title="Квалифицированный персонал">
          <ul>
            <li>Квалифицированный персонал, прошедший тренинги по защите ПД и фармаконадзору</li>
            <li>Опыт работы в программах лабораторной диагностики, регистрах, программах адресной помощи пациентам</li>
          </ul>
        </Card3>
        <Card3 title="Безопасность">
          <ul>
            <li>Выделенный сервер под программу</li>
            <li>Защищенный интернет канал</li>
            <li>Хранение и резервное копирование электронных материалов в защищенном хранилище дата-центра</li>
          </ul>
        </Card3>
      </GridContainer>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
ul {
  list-style-position: outside;
  padding: 0;
}

ul li {
  margin: 10px 0;
  font-weight: regular;
  font-size: 18px;
  font-family: var(--base-font);
}
</style>
