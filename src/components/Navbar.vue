<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" @click="route('dashboard')">
<!--        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">-->
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"
           v-if="$route.name === 'dashboard' || $route.name === 'home'"
           @click="route('logs')">
          Logs
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary"
               v-if="$route.name === 'dashboard' || $route.name === 'home'"
               @click="route('workflow')">
              <strong>Create new workflow</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        methods: {
            route(to) {
                if (this.$route.name !== to) {
                    this.$router.push(to)
                }
            }
        }
    }
</script>
