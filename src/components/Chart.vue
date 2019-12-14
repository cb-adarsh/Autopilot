<template>
  <canvas ref="myChart" width="400" height="400"></canvas>
</template>
<script>
  import Chart from 'chart.js'
    export default {
        name:'Chart',
        mounted(){
            var ctx = this.$el.getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Success','Failure'],
                    datasets: [{
                        label: 'Ratio',
                        data: [54,12],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 2
                    }]
                }
            });
        }
    }
</script>
