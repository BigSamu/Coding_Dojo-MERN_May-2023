// Programación funcional
// 1. No alteraras valores de las variables/estados
// 2. Solo podemos aplicar operaciones a valores y retornar valores 

var a = 1;
var b = 2;

a + b 


let arr1 = [1,2,3,4,5,6];
// arr1 => aplicar f(x) a cada elmt. => arr2
// map

let arr2 = arr1.map(
    (elemento) => {
        return elemento ** 2
    }
)

// console.log(arr1, arr2);

// arr => aplicar f(x) = true or false, clasificar y filtrar => arr2 (puede tener menos elementos)
// filter

let arr3 = arr1.filter(
    (elmt) => {
        return elmt % 2 === 0;
    }
)

// console.log(arr1, arr3);


// arr => aplicar una f1(r, x) y f2(x), esta función es acumilativa y suma r + f2(x) => valor
// reduce

let arr4 = arr1.reduce(
    (r, x) => {
        return r + x
    }, 0
)

// console.log(arr1, arr4);

////////////////////////////

// let arr1 = [1 ... 1000]
let arr = [];
for(let i = 1; i <= 100; i++){
    arr.push(i);
}


let arr = [1,2,3,4,5]

let arr2 = [
    [1,2,3,4],
    [5,6,7,8],    
]

let arr3 = [
    {
        id:1,
        name: 'Peter'
    },
    {
        id: 2,
        name: "Parker"
    }
]

console.log(
    arr.map((x) => {
        return x**3
    })
    .filter((x) => {
        return x % 2 === 0
    })
    .reduce(
        (r, x) => {
            return r + x
        }, 0
    )
)


/// Apendice

// forEach es como el map pero no es funcional porque no retorna valores
array.forEach(element => {
    
});


//find es como el filter pero solo retorna el element buscado, de lo contrario null
arr.find

/
