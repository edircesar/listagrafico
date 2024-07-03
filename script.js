// script.js
document.addEventListener('DOMContentLoaded', function () {
  let clientes = {
    Masculino: 0,
    Feminino: 0,
    Outro: 0
  };

  const form = document.getElementById('cadastroForm');
  const chartCanvas = document.getElementById('clientesChart');
  let clientesChart;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeCliente = document.getElementById('nomeCliente').value;
    const generoCliente = document.getElementById('generoCliente').value;

    if (nomeCliente && generoCliente) {
      clientes[generoCliente]++;
      $('#cadastroModal').modal('hide');
      form.reset();
      atualizarGrafico();
    }
  });

  function atualizarGrafico() {
    if (clientesChart) {
      clientesChart.destroy();
    }

    clientesChart = new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: ['Masculino', 'Feminino', 'Outro'],
        datasets: [{
          label: 'Número de Clientes',
          data: [clientes.Masculino, clientes.Feminino, clientes.Outro],
          backgroundColor: ['#007bff', '#dc3545', '#ffc107']
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
});
