<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar color="blue">
        <v-toolbar-title>New Message</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field
                v-model="messageBody"
                label="Message"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn @click="submit">submit</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messageBody: "",
    };
  },
  methods: {
    submit() {
      axios.post("http://localhost:3000/messages", {
        message: this.messageBody,
      });
    },
  },
};
</script>
