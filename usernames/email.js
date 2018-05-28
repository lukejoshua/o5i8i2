const fs = require('fs')
const crypto = require('crypto')

const hashArr = fs.readFileSync('emailHashes').toString().split('\n')

for(let studentNumber = 10000000;studentNumber<24000000;studentNumber++){
	let email = `${studentNumber}@sun.ac.za`
	const hash = crypto.createHash('md5').update(email).digest('hex')
	const index = hashArr.indexOf(hash)
	if(index != -1){
		console.log(`${hashArr[index]} : ${email}`)
	}
}
