<template>
  <canvas ref="myChart" style="width: 100%" height="400"></canvas>
</template>
<script>
    import Chart from 'chart.js'

    export default {
        name: 'Chart',
        mounted() {
            var ctx = this.$el.getContext('2d');
            var myChart = new Chart(ctx, {
                "type": "line",
                "data": {
                    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                    "datasets": [{
                        "backgroundColor": "rgba(54, 162, 235, 0.2)",
                        "borderColor": "rgba(54, 162, 235, 1)",
                        "data": [-76.97, 46.91, 32.31, -7.19, -9.85, -76.91, -50.36, 42.66],
                        "label": "Runs per month",
                        "fill": "start"
                    }]
                },
                "options": {
                    "spanGaps": false,
                    "elements": {"line": {"tension": 0.000001}},
                    "plugins": {"filler": {"propagate": false}},
                    "scales": {"xAxes": [{"ticks": {"autoSkip": false, "maxRotation": 0}}]},
                }
            });
        },
    }
</script>
