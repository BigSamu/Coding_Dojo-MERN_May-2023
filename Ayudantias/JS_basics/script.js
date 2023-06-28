// Destructuring

// let arr = [5, 4, 3, 2, 1];
// let obj = {
//     foo: "bar",
//     hola: false,
//     chao: 1,
//     pi: 3.14,
// };

// const [head, tail] = arr;
// console.log(head);
// console.log(tail);

// const { hola, pi, foo } = obj;
// console.log(foo);
// console.log(hola);
// console.log(pi);

// Spread/Rest

// let arr1 = [1, 2, 3, 4, 5];
// let obj1 = {
//     bar: 'foo',
//     3.14: 'pi',
//     chao: 'hola'
// }

// const arr2 = [...arr, ...arr1];
// console.log(arr2)

// const obj2 = {
//     ...obj1,
//     ...obj
// }
// console.log(obj2);

// console.log(obj);
// console.log(obj1);

// let data = {
//     'hola': 'chao'
// };

// let data_copy = {...data};
// data_copy.hola = 'bye'

// console.log(data);
// console.log(data_copy);



// const [head, ...tail] = arr;
// console.log(head);
// console.log(tail);

// function muchos_params(...params){
//     console.log(params)
// }

// muchos_params(1,2,3,4,5,6,7,8,9);
// muchos_params(1);


// Arrow fucntions/ anonima

// function funcion_nombre(param1, parma2, ...params){
//     console.log("Hola soy una función");
// }

// let funcion_nombre = (param1, parma2, ...params) => {
//     console.log("Hola soy una función");
// }


// $.ajax("swapi.com/people/1",{
//     method: 'GET',
//     complete: (xhrdata, textStatus) => {
        
//     }
// })


// Iterables

let arr = [
    5, 
    4, 
    3, 
    2, 
    1
];

let obj = {
    foo: "bar",
    hola: false,
    chao: 1,
    pi: 3.14,
};

// For ... of loop -> Valores

for (const i of arr){
    console.log(i);
}


// For ... in loop -> Llaves

for (const i in obj){
    console.log(i);
}
