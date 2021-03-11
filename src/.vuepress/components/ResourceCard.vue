<template>
  <v-card class="mx-auto" max-width="344" >
    <v-card-title :style="'background-color:'+headerColor+'; color:white'">{{title}}</v-card-title>
    <v-card-subtitle :style="'background-color:'+headerColor+'; color:white'">{{subtitle}}</v-card-subtitle>
    <v-card-text>
      {{text}}
    </v-card-text>
    <v-card-actions>
      <v-btn :href="url" target="_blank">{{linkText}}</v-btn>
    </v-card-actions>
</v-card>
</template>
<script>
  export default {
     props: {
       headerColor: {
                type: String,
                required: true,
        },
        title: {
                type: String,
                required: true,
        },
        subtitle: {
                type: String,
                required: true,
        },
        text: {
                type: String,
                required: true,
        },
        linkText: {
                type: String,
                required: true,
        },
        url: {
                type: String,
                required: true,
        },
     },
    data() {
      return {
      }
    }
  }
</script>