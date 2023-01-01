import validator from 'validator';
import * as Mat from './Matematica'
let email: string = 'felipe@gmail.com';

if(validator.isEmail(email)){
  console.log('Email Validor!')
}else{
  console.log('Email invalidor!')}

let res = Mat.multiplicar(35, 20)
console.log(res)