const fs = require('fs')

/*
Usage node key you_are_the_key
*/

const o = fs.readFileSync(process.argv[2]).toString()
	.split('')
	.map(x => [' ','\n'].includes(x) ? '00' : x)
	.join('')


let arr = []
for(let i = 0; i < o.length/2; i+=2){
	arr.push(Number(o[i] + o[i+1]))
}

let a = arr.map(x => ' abcdefghijklmnopqrstuvwxyz'[x]).join('')

console.log(a)
