// JavaScript is a dynamically typed language

// primitive

// string.number.bigint.boolean.undefined.symbol.null.

const score = 100

const isloggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')

const anotherid = Symbol('123')

// console.log(id === anotherid);

// const bignumber = 111111111111166666455678999999999999999n



// reference (non primitive)
//  Object , Array, finction

const heros = [ "hero alom" ,"ananta jalil", "zayed khan"];

 {name:"shabuddin"
age: 22
}

const myfunction = function  ( ) {console.log( "hello wrold");}
    

// console.log( typeof score);


// https://262.ecma-international.org/5.1/#sec-11.4.3

// ************************************************###################################

// stack(primitive),Heap ( non-primitive)

let Myyoutubename = "shabuddinislam788@gamil.com"

let anothername = Myyoutubename
anothername = "islamsabuddin7882gmail.com"

console.log( anothername);
console.log( Myyoutubename);

let userone = {

    email: "user69@gmail.com",

    bkash:"shabuddin69"

}


let usertwo = userone

usertwo.email = "shabuddin@gmail.com"

console.log(userone.email);
console.log(usertwo.email);