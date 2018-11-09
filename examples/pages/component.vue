<template>
  <div>
    <side-nav :navsData="navsData"></side-nav>
    <div class="main">
      <div class="content">
         <router-view class="markdown"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import navsData from "../nav.config.json";

  export default {
    data(){
      return {
        navsData
      }
    }
  }
</script>
<style scoped>
  .main{
    padding:0px 0 0 220px;
  }

  .content{
    width:1000px;
    margin:30px auto;
    padding:0 30px;
    box-sizing: border-box;
  }
</style>