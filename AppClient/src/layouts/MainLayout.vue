<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Qualificacions App </q-toolbar-title>

        <div>{{ fecha }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Login",
    caption: "Iniciar Sesion",
    icon: "login",
    link: "#/login",
  },
  {
    title: "Registrarse",
    caption: "Registrarse",
    icon: "login",
    link: "#/registrarse",
  },
  {
    title: "Github",
    caption: "github.com/ggb",
    icon: "code",
    link: "https://github.com/GeorgiGB/AC-DI-SERVER-CLIENT-GGB",
  },
  {
    title: "About me",
    caption: "Information about me",
    icon: "person",
    link: "#/aboutme",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  //Fecha
  computed: {
    fecha() {
      const fechaHui = new Date(Date.UTC(2022, 11, 16));
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return fechaHui.toLocaleDateString("es-ES", options);
    },
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
