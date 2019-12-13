<template>
  <div>
    <b-button type="is-primary">{{msg}}</b-button>
  </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        data () {
            return {
                msg: 'Dashboard Compontent'
            }
        },
        components:{
        }
    }
</script>
