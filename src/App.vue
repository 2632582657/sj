<template>
  <div id="app">
    <js-header></js-header>
    <router-view/>
    <js-footer></js-footer>
  </div>
</template>
<script>
import '@/css/common.css'
import '@/assets/jquery-3.2.1.js'

import jsHeader from '@/components/header.vue'
import jsFooter from '@/components/footer.vue'

export default {
  components:{
            jsHeader,
            jsFooter
        }
}
</script>

<style lang="less" <style lang="less" scoped>
@import "css/common.css";
</style>