<template>
  <div>
    <h4 class="display-1">Messages</h4>
    <v-list>
      <v-list-tile v-for="message in messages" @click="">
        <v-list-tile-content>
          <v-list-tile-title v-text="message"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: ["hello", "hi", "its working"],
    };
  },
};
</script>
