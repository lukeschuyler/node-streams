#!/usr/bin/env node

const {readFileSync} = require('fs')

const readFile = readFileSync(process.argv[2])

process.stdout.write(readFile)

fileArg = process.argv[2]

if (fileArg) {
	readFile(fileArg, (err, data) => {
		if (err) throw err
	 	console.log(data.toString())
	})
}

console.log('sync or async')
