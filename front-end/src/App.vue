<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat>Messages</v-btn>
      <v-spacer />
      <v-btn flat>Login</v-btn>
    </v-toolbar>

    <v-content>
      <br />
      <NewMessage />
      <br />
      <Messages />
    </v-content>
  </v-app>
</template>

<script>
import Messages from "@/components/Messages";
import NewMessage from "@/components/NewMessage";

export default {
  name: "App",
  components: {
    Messages,
    NewMessage,
  },
  data() {
    return {
      //
    };
  },
};
</script>
