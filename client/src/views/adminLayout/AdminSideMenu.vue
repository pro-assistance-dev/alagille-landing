<template>
  <div class="menu-tools">
    <IconLogoAno size="86px" margin="2px auto 44px auto" />
  </div>
  <div v-if="mounted" class="menu-body">
    <div>
      <DropList v-for="item in PHelp.AdminUI.Menu.Get()" :key="item.name" :name="item.name">
        <div
          v-for="children in PHelp.AdminUI.Menu.GetChildren(item)"
          :key="children.to"
          :index="children.to"
          :class="{
            'selected-menu-item': children.to === '/admin/' + PHelp.AdminUI.Menu.GetPath(),
            'menu-item': children.to !== PHelp.AdminUI.Menu.GetPath(),
          }"
          @click="Router.To(children.to)"
        >
          {{ children.name }}
        </div>
      </DropList>
    </div>
  </div>
  <div class="exit-button-container">
    <div
      :class="{
        'selected-menu-item': Router.GetPath() === 'settings',
        'menu-item': Router.GetPath() !== 'settings',
      }"
      :style="{ margin: '10px 20px' }"
      @click="Router.To('settings')"
    >
      <PString
        font-size="13px"
        font-weight="600"
        string="Настройки"
        justify-content="left"
        width="auto"
        margin="0 5px 0 0"
        padding="6px 0"
        color="inherit"
      />
    </div>
    <PFlex justify-content="left" margin="0 0 0 20px">
      <PButton
        skin="text_ano"
        type="primary"
        text="Профиль"
        height="28px"
        margin="0"
        width="54px"
        font-size="13px"
        @click="Router.To('/')"
      />
      <PButton skin="text_ano" type="primary" text="Выйти" height="28px" margin="0" width="46px" font-size="13px" @click="logout" />
      <IconAccount size="28px" />
    </PFlex>
  </div>
</template>

<script lang="ts" setup>
import IconAccount from '@/components/Icons/IconAccount.vue';
import IconLogoAno from '@/components/Icons/IconLogoAno.vue';

import menuList from './menuList';

defineProps({
  shadow: { type: Boolean, default: true },
  border: { type: Boolean, default: true },
});

// const activePath: Ref<string> = ref('');
const mounted = ref(false);

watch(
  () => Router.GetPath(),
  () => {
    PHelp.AdminUI.Menu.SetPath(Router.GetPath());
  }
);

onBeforeMount(async () => {
  PHelp.AdminUI.Menu.Set(menuList);
  PHelp.AdminUI.Menu.SetPath(Router.GetPath());
  mounted.value = true;
});

const logout = async () => {
  PHelp.Auth.Logout();
  await Router.To('/');
};
</script>

<style scoped>
.menu-tools {
  height: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 33px 13px 0 20px;
  cursor: pointer;
}

.menu-body {
  padding: 0 13px 0 40px;
}

.menu-item {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 6px 0;
  cursor: pointer;
  font-family: var(--base-font);
  color: var(--submenu-font-color);
  background: var(--menu-background);
}

.menu-item:hover {
  color: var(--submenu-font-color-hovered);
  background: var(--menu-background-hovered);
}

.selected-menu-item {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 6px 0;
  text-decoration: underline;
  font-family: var(--base-font);
  color: var(--submenu-font-color-pressed);
  background: var(--menu-background-pressed);
}

.selected-menu-item:hover {
  color: var(--submenu-font-color-hovered);
  background: var(--menu-background-hovered);
}

.exit-button-container {
  box-sizing: border-box;
  margin: 0;
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 10px 0 10px 20px;
}
</style>
