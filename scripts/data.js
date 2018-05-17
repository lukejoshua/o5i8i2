const fs = require('fs')
const dirName = '../hadley_drive/data/'
const fileList = fs.readdirSync(dirName)

const data = fileList.map(name => [...fs.readFileSync(dirName+name)])

for(let i = 0; i < data.length; i++){
	const outputName = `not_${fileList[i]}`
	fs.writeFileSync(`../plus/${outputName}`, Buffer.from(not(data[i])))
}

function not(a){
	return a.map(x => x+1)
}
