"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let email = 'felipe@gmail.com';
if (validator_1.default.isEmail(email)) {
    console.log('Email Validor!');
}
else {
    console.log('Email invalidor!');
}
