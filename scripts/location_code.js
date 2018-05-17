const bar_widths = [
	 4,  7,  3, 13,  7,
	 3, 21,  7,  2, 11,
	12,  3,  2,  6,  1,
	 8,  1, 30, 15,  6,
	 9,  9,  3,  1,  2,
	12,  3,  3,  2, 13,
	 4,  9,  2,  2, 10,
	 5,  7,  3
]

const gaps = new Array(38).fill(1).map((x,i) => {
	if(i == 25) return 3
	return [6,16,17,18].includes(i) ? 2 : 1
})

// what do ???

const f = a => console.log(a.reduce((x,y) => x+y,0))

f(bar_widths)
f(gaps)
