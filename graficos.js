arrayInfoBasica.data.semana;
let i = 1;
let it = 1;

var xValues = [];

for (
    arrayInfoBasica.data.semana;
    arrayInfoBasica.data.semana >= i;
    arrayInfoBasica.data.semana--
) {
    xValues.push(arrayInfoBasica.data.semana);
}

// console.log(xValues)

function crearGraficos(
    divContenedorGr,
    valoresGr1,
    valoresGr2,
    nombrevalor1,
    nombrevalor2
) {
    var arrPeso = [];
    var arrGrasa = [];
    var contenedorGraficos = document.querySelector(divContenedorGr);
    var divG = document.createElement("div");
    divG.classList.add("chart-container");
    var canvasG = document.createElement("canvas");
    canvasG.setAttribute("id", "myChart");
    divG.appendChild(canvasG);
    contenedorGraficos.appendChild(divG);
    divG.style.height = "auto";
    divG.style.width = "100vw";

    xValues.forEach((e) => {
        if (valoresGr1[e] == undefined) {
            arrGrasa.push(0);
        } else {
            arrGrasa.push(valoresGr1[e]);
        }

        if (valoresGr2[e] == undefined) {
            arrPeso.push(0);
        } else {
            arrPeso.push(valoresGr2[e]);
        }
    });
    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,

            datasets: [
                {
                    label: nombrevalor1,
                    data: arrGrasa,
                    borderColor: "orangered",
                    fill: false,
                },
                {
                    label: nombrevalor2,
                    data: arrPeso,
                    borderColor: "aqua",
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        },
    });
}

function crearGraficos1(divContenedorGr, valoresGr1, nombrevalor1, colorGr) {
    var arrGrasa = [];
    var contenedorGraficos = document.querySelector(divContenedorGr);
    var divG = document.createElement("div");
    divG.classList.add("chart-container");
    var canvasG = document.createElement("canvas");
    canvasG.setAttribute("id", "myChart1");
    divG.style.height = "auto";
    divG.style.width = "96vw";

    divG.appendChild(canvasG);
    contenedorGraficos.appendChild(divG);

    xValues.forEach((e) => {
        if (valoresGr1[e] == undefined) {
            arrGrasa.push(0);
        } else {
            arrGrasa.push(valoresGr1[e]);
        }
    });

    var ctx = document.getElementById("myChart1").getContext("2d");

    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: xValues,

            datasets: [
                {
                    label: nombrevalor1,
                    data: arrGrasa,
                    borderColor: colorGr,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        },
    });
}

function crearCirculosPro() {

    var arryGeneC = [];
    arryGeneC.push(arrayInfoGeneral.registros.calificacion.general)

    var arryGeneC1 = arryGeneC[0];


    console.log(arryGeneC1)

    arryGeneC1.forEach((e) => {
        if (valoresGr1[e] == undefined) {
            arrGrasa.push(0);
        } else {
            arrGrasa.push(valoresGr1[e]);
        }
    });
}
crearCirculosPro()

document.querySelector("body").addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className == "fa-solid fa-chevron-right selectorFlecha1") {
        crearGraficos1(
            ".div-graficoAvanceSemanal",
            arrayInfoGeneral.registros.calificacion.general,
            "General",
            "#3effff"
        );
    } else if (e.target.className == "fa-solid fa-chevron-right selectorFlecha2")
        crearGraficos1(
            ".div-graficoAvanceSemanal",
            arrayInfoGeneral.registros.calificacion.avance,
            "Avance",
            "#1f3ff3"
        );
});
crearGraficos(
    ".div-grafico-peso-grasa",
    arrayInfoGeneral.registros.mediciones.peso,
    arrayInfoGeneral.registros.mediciones.grasa,
    "Grasa",
    "Peso"
);
