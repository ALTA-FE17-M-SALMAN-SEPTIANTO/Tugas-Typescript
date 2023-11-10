/** @format */

// const golongan1: number = 2000;
// const golongan2: number = 2000;
// const golongan3: number = 2000;
// const golongan4: number = 2000;

// if (golongan1 < 2000) {
//   console.log("harga pas");
// }
// if (golongan1 > 2000) {
//   console.log("harga pas");
// }
// if (golongan1 == 2000) {
//   console.log("harga pas");
// }
// if (golongan1 != 2000) {
//   console.log("harga pas");
// }

// FUNCTION

function sumNumber(): number {
  const number1: number = 10;
  const number2: number = 20;
  const sum: number = number1 + number2;
  //   console.log(sum);
  return sum;
}

// sumNumber(); -> cara memanggil function
// untuk memanggil nilai balikan dari function sumNumber()
// console.log(sumNumber());

// console.log(sumNumber() + 5);

function sumNumberWuthParams(number1: number, number2: number): number {
  const sum = number1 + number2;
  return sum;
}

// disclaimer
// penulisan argument wajib berurutan dengan urutan parameter
//  misalkan, ada function sumNumberWithParams(1 & 2)
// berarti argument harus urut dengan x dan y juga

// console.log(sumNumberWuthParams(10, 20));
// console.log(sumNumberWuthParams(30, 50));

// combination if else
function checkGolongan(price: number) {
  if (price == 2000) {
    console.log("harga parkir motor");
  }
  if (price >= 2000 && price <= 5000) {
    console.log("harga mobil");
  }
  if (price > 5000) {
    console.log("harga bus/truck");
  }
}
// checkGolongan(4000);
// checkGolongan(1000); --> tidak akan dicetak, karena tidak diberikan kondisi

// function if else
// rules : jika peraturan pertama tidak dipenuhi maka akan terlempar langsung ke else

function checkNumber(num: number): string {
  if (num % 2 == 0) {
    return "bilangan genap";
  } else {
    return "bilangan ganjil";
  }
}

// console.log(checkNumber(7));
// console.log(checkNumber(42));

// function else if

function checkJam(hour: number): string {
  if (hour < 12) {
    return "selamat pagi";
  } else if (hour >= 12 && hour < 15) {
    return "selamat siang";
  } else if (hour >= 15 && hour <= 18) {
    return "selamat sore";
  } else if (hour >= 18 && hour < 24) {
    return "selamat malam";
  } else {
    return "jam tidak ada";
  }
}
// console.log(checkJam(25));

// const v1 number =400;
// const v2 number =700;

// function checkNum(inputA: number, inputB: number){
//     if (inputA === v1){
//         if(inputB === v2){
//             return""
//         }
//     }
// }
