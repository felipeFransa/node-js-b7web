import { multiplicar, somar, subtrair } from './Matematica';
import validator from 'validator';

let n1: number = 25;
let n2: number = 30;

console.log(validator.isEmail('felipe@gmail.com'))

console.log(`Multiplica: ${multiplicar(n1, n2)}`)
console.log(`Somar ${somar(n1, n2)}`)
console.log(`Subtrair: ${subtrair(n1, n2)}`)