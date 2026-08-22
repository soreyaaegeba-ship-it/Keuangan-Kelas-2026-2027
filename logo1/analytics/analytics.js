function out1() {
    window.location.href="../../index.html";
};

const ctx = document.getElementById("grafikKeuangan");

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
        datasets: [{
            label: "Kas(Kekurangan)",
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
            borderColor: "red",
            pointBackground: "red"
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart.data.datasets[0].label === "Kas(Kekurangan)") {
                        chart.data.datasets[0].label = "Kas Pramuka(Kekurangan)";
                        chart.data.datasets[0].data = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ];
                    } else {
                        chart.data.datasets[0].label = "Kas(Kekurangan)";
                        chart.data.datasets[0].data = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
                    }

                    chart.update();
                }
            }
        }
    }
});