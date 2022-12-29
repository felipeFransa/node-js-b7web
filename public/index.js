"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matematica_1 = require("./Matematica");
const validator_1 = __importDefault(require("validator"));
let n1 = 25;
let n2 = 30;
console.log(validator_1.default.isEmail('felipe@gmail.com'));
console.log(`Multiplica: ${(0, Matematica_1.multiplicar)(n1, n2)}`);
console.log(`Somar ${(0, Matematica_1.somar)(n1, n2)}`);
console.log(`Subtrair: ${(0, Matematica_1.subtrair)(n1, n2)}`);
