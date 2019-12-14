<template>
  <div>
    <Navbar/>
    {{msg}}
  </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    export default {
        name: 'Logs',
        data () {
            return {
                msg: 'Logs Compontent'
            }
        },
        components:{
            Navbar
        }
    }
</script>
