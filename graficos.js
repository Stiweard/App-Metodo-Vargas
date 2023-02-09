

arrayInfoBasica.data.semana
let i = 1
let it = 1


var xValues = [];
let arrPeso = [];
let arrGrasa = [];

for (arrayInfoBasica.data.semana; arrayInfoBasica.data.semana >= i; arrayInfoBasica.data.semana--) {
    xValues.push(arrayInfoBasica.data.semana)
}

// console.log(xValues)




xValues.forEach((e) => {
    // console.log(e)

if(arrayInfoGeneral.registros.mediciones.peso[e] == undefined){
arrGrasa.push(0)
    // console.log(0)
}else{
arrGrasa.push(arrayInfoGeneral.registros.mediciones.peso[e])

    // console.log(arrayInfoGeneral.registros.mediciones.peso[e])

}

if(arrayInfoGeneral.registros.mediciones.grasa[e] == undefined){
    arrPeso.push(0)
        // console.log(0)
    }else{
arrPeso.push(arrayInfoGeneral.registros.mediciones.grasa[e])
    
        // console.log(arrayInfoGeneral.registros.mediciones.grasa[e])
    
    }
    


})

// console.log(arrGrasa)
// console.log(arrPeso)

// grafico.data.datasets[0].data.push()
// grafico.data.datasets[1].data.push()
// console.log(grafico.data.datasets[0].data);
// console.log(grafico.data.datasets[1].data);




let grafico = new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,

        datasets: [{
            label: 'Grasa',
            data: arrGrasa,
            borderColor: "orangered",
            fill: false,

        }, {
            label: 'Peso',
            data: arrPeso,
            borderColor: "aqua",
            fill: false,

        }]
    },
    options: {
        legend: { display: true }
    }

});


// console.log(arrayInfoGeneral.registros.mediciones.peso)
// console.log(arrayInfoGeneral.registros.mediciones.grasa)

