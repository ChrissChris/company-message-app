<template>
  <v-app>
    <v-app-bar> </v-app-bar>

    <v-main>
      <Messages />
    </v-main>
  </v-app>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import Messages from "./components/Messages ";

export default {
  name: "App",

  components: {
    Messages,
  },

  data: () => ({
    //
  }),
};
</script>
