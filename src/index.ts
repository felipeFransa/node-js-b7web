import validator from 'validator';
let email: string = 'felipe@gmail.com';

if(validator.isEmail(email)){
  console.log('Email Validor!')
}else{
  console.log('Email invalidor!')
}
