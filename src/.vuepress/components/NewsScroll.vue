<template>
  <marquee-text :repeat="10" class="marquee">
      <span v-for="(item,index) in items" :key="index">
            <a :href="item.link">{{item.text}}</a>
        </span>
  </marquee-text>
</template>
<script>
  export default {
     props: {
       items: {
                type: Array,
                required: true,
        },
        
     },
    data() {
      return {
      }
    },
    mounted:function(){
      document.getElementsByClassName("navbar")[0].style['margin-top']="2rem"
    },
    destroyed:function(){
      document.getElementsByClassName("navbar")[0].style['margin-top']="0rem"
    }
  }
</script>
<style scoped lang="stylus">
    .marquee{
      z-index: 100;
      position: absolute;
      top:0;
      left:0;
      right: 0;
      margin-bottom:-1rem;
      background-color: $accentColor;
      padding: 0.5rem;
    }
    .marquee span{
      padding:0 1rem;
    }
    .marquee span a{
      color:white;
    }    
</style>