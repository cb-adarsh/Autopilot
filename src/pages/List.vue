<template>
  <div>
    <Navbar/>
    <div
      class="rs-logs rs-logs--full"
      v-for="log in logs"
      :key="log.id">
      <div class="my-flex" style="align-items: center;">
        <div class="is-size-5" style="margin-right: 16px">Workflow {{rand()}}</div>
        <b-tag rounded class="my-tiny-text" :class="{'is-success':log.success,'is-danger':!log.success}">
          {{log.success ? 'SUCCESS' : 'FAILED'}}
        </b-tag>
      </div>
      <div class="my-flex">
        <div><b>{{log.count}}</b> records affected</div> &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="is-size-6">Last ran at {{getFormattedDate(log.lastRunAt)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";

    export default {
        name: 'Logs',
        data() {
            return {
                
            }
        },
        components: {
            Navbar
        },
        methods: {
            rand() {
                return Math.floor(Math.random() * 100)
            },
            getFormattedDate(date) {
                let d = new Date(date);
                return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            }
        }
    }
</script>
