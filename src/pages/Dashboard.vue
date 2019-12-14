<template>
  <div>
    <Navbar/>
    <div class="my-container">
      <div class="columns">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-content">
              <p class="title is-size-4">
                Ratio
              </p>
              <Chart />
            </div>
          </div>
        </div>
        <div class="column is-two-third">
          <div class="card">
            <div class="card-content">
              <p class="title is-size-4">
                Errors
              </p>
              <div class="my-error-log-container">
                <div>skjnfsrg</div>
                <div>ksdjngskdjgnsg</div>
                <div>ksjnjfsefj</div>
                <div>qpwijeqlwejrn</div>
                <div>skjnfsrg</div>
                <div>ksdjngskdjgnsg</div>
                <div>ksjnjfsefj</div>
                <div>qpwijeqlwejrn</div>
                <div>skjnfsrg</div>
                <div>ksdjngskdjgnsg</div>
                <div>ksjnjfsefj</div>
                <div>qpwijeqlwejrn</div><div>skjnfsrg</div>
                <div>ksdjngskdjgnsg</div>
                <div>ksjnjfsefj</div>
                <div>qpwijeqlwejrn</div>
                <div>skjnfsrg</div>
                <div>ksdjngskdjgnsg</div>
                <div>ksjnjfsefj</div>
                <div>qpwijeqlwejrn</div>
                <div>skjnfsrg</div>
                <div>ksdjngskdjgnsg</div>
                <div>ksjnjfsefj</div>
                <div>qpwijeqlwejrn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import Chart from "../components/Chart";

    export default {
        name: 'Dashboard',
        data() {
            return {
                msg: 'Dashboard Compontent'
            }
        },
        components: {
            Chart,
            Navbar
        }
    }
</script>
