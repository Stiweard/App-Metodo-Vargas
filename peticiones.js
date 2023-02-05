

arr = []

async function INICIO() {

    const options = {
        mode: "cors",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            device: "unique_device",
        },
        method: 'POST',
        body: JSON.stringify({
            "AUTENTIFICADOR": "brianrg1313@icloud.com",
            "CONTRASENA": "12345678"
        })
    }

    let result = await fetch("https://api.metodovargas.app/patients/v1/login/", options).then((E) => E.json())
        .catch(console.error);
    console.log(result);

    if (result.console == undefined) {

        console.log("bienvenido");
        TokenId = result
        arr.push(TokenId) //posicion 0 del arreglo es el token de inicio de sesión
        GetData()

    }


}

INICIO();

async function GetData() {

    const optionsGeneral = {
        mode: "cors",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            device: "unique_device",
            access: arr[0]
        },
        method: 'GET',
    }



    let resultC1 = await fetch("https://api.metodovargas.app/patients/v1/patient/", optionsGeneral)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })



    let resultC2 = await fetch("https://api.metodovargas.app/patients/v1/record/", optionsGeneral)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })


    let resultNotas = await fetch("https://api.metodovargas.app/patients/v1/notes/", optionsGeneral)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })


    let resultMenuAlimenticio = await fetch("https://api.metodovargas.app/patients/v1/food_menu/", optionsGeneral)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })


    let resultListaAlimenticio = await fetch("https://api.metodovargas.app/patients/v1/food_list/", optionsGeneral)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })


    let resultCartaAlimenticio = await fetch("https://api.metodovargas.app/patients/v1/food_list/", optionsGeneral)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    }