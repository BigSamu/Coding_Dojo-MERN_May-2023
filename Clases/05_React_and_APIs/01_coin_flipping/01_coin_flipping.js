// ------------------------------------------
// FLIPPING COIN (PROMISE RECAP)
// ------------------------------------------

// I) Toss Coin function -> Toss a coin a get a "head" or a "tail"

const tossCoin = () => {

  // let value = Math.random();
  // if (value > 0.5) {
  //   return "heads";
  // }
  // else{
  //   return "tails";
  // }
  // Above same as below:
  return Math.random() > 0.5 ? "heads" : "tails";
};

// II.1) Five Heads in a row function -> Synchronous
const fiveHeadsSync = () => {
  let headCount = 0;
  let attempts = 0;
  while(headCount < 5){
    attempts++;
    let result = tossCoin();
    console.log(`${attempts}. ${result} was flipped`);
    if(attempts >= 100){
      return `Sorry!!! You reach ${attempts} tries. Let's try again`
    }
    if(result === "heads"){
      headCount++;
    }
    else{
      headCount = 0;
    }
  }
  return `It took ${attempts} tries to flip five "heads" in a row}`
};

// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");
// console.log("-------------------------------------------------------");


// II.2) Five Heads in a row function -> Asynchronous
const fiveHeadsAsync = () => {
  return new Promise((resolve, reject) => {
    let headCount = 0;
    let attempts = 0;
    while(headCount < 5){
      attempts++;
      let result = tossCoin();
      console.log(`${attempts}. ${result} was flipped`);
      if(attempts >= 100){
        reject(`Sorry!!! You reach ${attempts} tries. Let's try again`);
        break;
      }
      if(result === "heads"){
        headCount++;
      }
      else{
        headCount = 0;
      }
    }
    resolve(`It took ${attempts} tries to flip five "heads" in a row}`);
  });
};

fiveHeadsAsync()
  .then(res => console.log(res))
  .catch(err => console.log(err));
console.log("This is run before the fiveHeadsAsync function completes");
