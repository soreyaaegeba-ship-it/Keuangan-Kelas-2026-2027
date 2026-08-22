function kotak_informasi1() {
    window.location.href="Daftar/Aglis/Aglis.html"
};

function kotak_informasi2() {
    window.location.href="Daftar/Dafa/Dafa.html"
};

function kotak_informasi3() {
    window.location.href="Daftar/Iqbal/Iqbal.html"
};

function kotak_informasi4() {
    window.location.href="Daftar/Ayu/Ayu.html"
};

function kotak_informasi5() {
    window.location.href="Daftar/Bayu/Bayu.html"
};

function kotak_informasi6() {
    window.location.href="Daftar/Berlian/Berlian.html"
};

function kotak_informasi7() {
    window.location.href="Daftar/Erlangga/Erlangga.html"
};

function kotak_informasi8() {
    window.location.href="Daftar/Faiq/Faiq.html"
};

function kotak_informasi9() {
    window.location.href="Daftar/Fajar/Fajar.html"
};

function kotak_informasi10() {
    window.location.href="Daftar/Farid/Farid.html"
};

function kotak_informasi11() {
    window.location.href="Daftar/Azza/Azza.html"
};

function kotak_informasi12() {
    window.location.href="Daftar/Jelita/Jelita.html"
};

function kotak_informasi13() {
    window.location.href="Daftar/Febriansyah/Febriansyah.html"
};

function kotak_informasi14() {
    window.location.href="Daftar/Burhan/Burhan.html"
};

function kotak_informasi15() {
    window.location.href="Daftar/Fahmi/Fahmi.html"
};

function kotak_informasi16() {
    window.location.href="Daftar/Khafadil/Khafadil.html"
};

function kotak_informasi17() {
    window.location.href="Daftar/Nauval/Nauval.html"
};

function kotak_informasi18() {
    window.location.href="Daftar/Choiri/Choiri.html"
};

function kotak_informasi19() {
    window.location.href="Daftar/Myiesha/Myiesha.html"
};

function kotak_informasi20() {
    window.location.href="Daftar/Naira/Naira.html"
};

function kotak_informasi21() {
    window.location.href="Daftar/Faruq/Faruq.html"
};

function kotak_informasi22() {
    window.location.href="Daftar/Naura/Naura.html"
};

function kotak_informasi23() {
    window.location.href="Daftar/Nayla/Nayla.html"
};

function kotak_informasi24() {
    window.location.href="Daftar/Nazfar/Nazfar.html"
};

function kotak_informasi25() {
    window.location.href="Daftar/Rahma/Rahma.html"
};

function kotak_informasi26() {
    window.location.href="Daftar/Salsa/Salsa.html"
};

function kotak_informasi27() {
    window.location.href="Daftar/Shevana/Shevana.html"
};

function kotak_informasi28() {
    window.location.href="Daftar/Shyfa/Shyfa.html"
};

function kotak_informasi29() {
    window.location.href="Daftar/Sony/Sony.html"
};

function kotak_informasi30() {
    window.location.href="Daftar/Tsania/Tsania.html"
};

function kotak_informasi31() {
    window.location.href="Daftar/Yasmin/Yasmin.html"
};

function kotak_informasi32() {
    window.location.href="Daftar/Yunita/Yunita.html"
};

const ctx = document.getElementById("grafikKeuangan");

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
        datasets: [{
            label: "Pemasukan",
            data: [12, 10, 17, 13, 9]
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart.data.datasets[0].label === "Pemasukan") {
                        chart.data.datasets[0].label = "Pengeluaran";
                        chart.data.datasets[0].data = [8, 6, 10, 7, 5];
                    } else {
                        chart.data.datasets[0].label = "Pemasukan";
                        chart.data.datasets[0].data = [12, 10, 17, 13, 9];
                    }

                    chart.update();
                }
            }
        }
    }
});

const ctx1 = document.getElementById("grafikKeuangan1");

const chart1 = new Chart(ctx1, {
    type: "line",
    data: {
        labels: ["M1", "M2", "M3", "M4", "M5"],
        datasets: [{
            label: "Kas",
            data: [12, 10, 17, 13, 9]
        }]
    },

    options: {
        plugins: {
            legend: {
                onClick: function(e, legendItem, legend) {

                    if (chart1.data.datasets[0].label === "Kas") {
                        chart1.data.datasets[0].label = "Kas Pramuka";
                        chart1.data.datasets[0].data = [8, 6, 10, 7, 5];
                    } else {
                        chart1.data.datasets[0].label = "Kas";
                        chart1.data.datasets[0].data = [12, 10, 17, 13, 9];
                    }

                    chart1.update();
                }
            }
        }
    }
});

function analytics() {
    window.location.href="logo1/analytics/analytics.html"
};