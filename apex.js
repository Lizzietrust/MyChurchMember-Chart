var options = {
    series: [300, 500, 120, 150, 10, 12],
    chart: {
    width: 480,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
    dataLabels: {
        style: {
          colors: [
          "#46A2F7",
          "#2BC3B1",
          "#39BA5F",
          "#C3B42B",
          "#6E768E",
          "#BA6F39"]
        }
      }
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  fill: {
    colors: [
        "#46A2F7",
        "#2BC3B1",
        "#39BA5F",
        "#C3B42B",
        "#6E768E",
        "#BA6F39"
      ],
  },
  labels: ['Men', 'Women', 'Children', 'Teens', 'First Timer', 'Second Timer'],
  
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
  }
  };

  var chart = new ApexCharts(document.querySelector(".chart-one"), options);
  chart.render();
