function sumar(a, b){
    console.log("2")
    return a + b;
}

var sumar = (a,b) => {
    console.log("2")
    return a + b;
}

 // Promesas

 function callback(value, resolve){
    console.log("Esto se ejecuto 3");
    resolve(value)
 }

 const promise = new Promise((resolve, reject) => {
    let dataSWAPI = {
        id: 1,
        name: "Luck"
    }
    console.log("Esto se ejecuto 2");

    setTimeout(callback(undefined, resolve), 1000);
  });


console.log("Esto se ejecuto 1");

promise.then((value) => {
    console.log("Esto se ejecuto 4", value);
})
.catch((error) => {
    if (error)
        console.log("Esto se ejecuto 5", error);
    else
        console.log("Esto se ejecuto 6");
})

//Caso boton con JQuery

// $("#button").on("click", ()=> {
//     const promise = new Promise((resolve, reject) => {
//         let dataSWAPI = {
//             id: 1,
//             name: "Luck"
//         }
//         console.log("Esto se ejecuto 2");
    
//         setTimeout(callback(undefined, resolve), 1000);
//       });

//       promise.then((value) => {
//         element.innerHTML = value
//     })
//     .catch((error) => {
//         element.innerHTML = "Hubo un error"
//     })
// })


// Libreria
async function get(url){
    return fetch(url)
}

/////////////

async function querySWAPI(id){

    if (id <= 0){
        console.log("Error: El id no puede ser menor a 0")
    } else {
        try {
            let value = await get(`https://swapifdsfsd.dev/api/people/${id}`)
                value.json()
                    .then(val => console.log(val))
                    .catch(err => console.log(err))
        } catch (error) {
            console.log(error, ": (")
        }
        
    }
}

querySWAPI(-1);
querySWAPI(1);