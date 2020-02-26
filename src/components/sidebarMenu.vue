<template>
  <v-list flat color="transparent" max-width="150px">
    <v-list-item-group>
      <v-list-item color="transparent" v-for="(sub, i) in menu" :key="i">
        <v-list-item-icon>
          <router-link :to="sub.href">
              <v-btn
                dark
                color="#EC7580"
                font="white"
                class="subheading mx-3 px-3"
                target="_blank"
                elevation="20"
                x-large
              >
              {{ sub.title }}
            </v-btn>
          </router-link>
        </v-list-item-icon>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<style>
div a {
    text-decoration: none;
}
</style>
<script>
export default {
  name: "sidebarMenu",
  data: () => ({
    menu: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "About",
        href: "/about"
      },
      {
        title: "Skills",
        href: "/skills"
      }
    ]
  })
};
</script>
