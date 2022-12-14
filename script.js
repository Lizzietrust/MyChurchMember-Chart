var monthlyReport = document.getElementById("chart-monthdoughnut").getContext("2d");
var percentageGrowth = document.getElementById("chart-monthline").getContext("2d");
var weeklyReport = document.getElementById("chart-weekdoughnut");
var percentageGrowthWeek = document.getElementById("chart-weekline").getContext("2d");

var myChart = new Chart(monthlyReport, {
    type: 'doughnut',
    data: {
        labels: ['Men', 'Women', 'Children', 'Teens', 'First Timer', 'Second Timer'],
        datasets: [{
          label: '',
          data: [300, 500, 120, 150, 10, 12],
          backgroundColor: [
            "#46A2F7",
            "#2BC3B1",
            "#39BA5F",
            "#C3B42B",
            "#6E768E",
            "#BA6F39"
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: "true",
        plugins: {
            legend: {
                display: false
            }
        },
      }
});

var lineChart = new Chart(percentageGrowth, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: '',
          data: [42, 23, 61, 79, 70, 51, 31, 40, 59, 60, 81, 100],
          backgroundColor:  [
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7"
          ],
          borderWidth: 1,
          borderColor: "#46A2F7",
        }]
      },
      options: {
        responsive: "true",
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
              grid: {
                drawOnChartArea: false,
              }
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false
                },
              }
        }
      },
      
});

var myChartWeek = new Chart(weeklyReport, {
    type: 'doughnut',
    data: {
        labels: ['Men', 'Women', 'Children', 'Teens', 'First Timer', 'Second Timer'],
        datasets: [{
          label: '',
          data: [300, 500, 120, 150, 10, 12],
          backgroundColor: [
            "#46A2F7",
            "#2BC3B1",
            "#39BA5F",
            "#C3B42B",
            "#6E768E",
            "#BA6F39"
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: "true",
        plugins: {
            legend: {
                display: false
            }
        },
      }
});

var lineChartWeek = new Chart(percentageGrowthWeek, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: '',
          data: [42, 23, 61, 79, 70, 51, 31, 40, 59, 60, 81, 100],
          backgroundColor:  [
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7",
            "#46A2F7"
          ],
          borderWidth: 1,
          borderColor: "#46A2F7"
          
        }]
      },
      options: {
        responsive: "true",
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
              grid: {
                drawOnChartArea: false,
              }
            },
            y: {
                beginAtZero: true,
                grid: {
                    drawOnChartArea: false
                },
              }
        }
      }
});


const arrow = document.querySelector(".acc-arrow");

arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
});

