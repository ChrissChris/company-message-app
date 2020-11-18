<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="mess in $store.state.messages" :key="mess">
          <v-list-tile-content>
            <v-list-tile-title v-text="message"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  async created() {
    this.$store.dispatch("getMessages");
  },
};
</script>
