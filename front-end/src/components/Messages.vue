<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar color="blue">
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="message in messages" :key="message">
          <v-list-tile-content>
            <v-list-tile-title v-text="message"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: ["hello", "hi", "its working"],
    };
  },
  async created() {
    this.messages = (await axios.get("http://localhost:3000/messages")).data;
  },
};
</script>
